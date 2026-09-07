// Ausführbare Java-Blöcke über Jupyter (Binder + jjava-Kernel, Java 25).
// ```java, java-exec → Zelle; reine ```java-Blöcke bleiben statisch.
// Klick auf ▶ startet EINEN Binder-Build (Kontingent), danach ein Kernel pro Seite.
(() => {
  'use strict';
  const SELECTOR = 'pre > code.language-java.java-exec';
  let started = false, btn = null;

  const mark = () => {
    const blocks = document.querySelectorAll(SELECTOR);
    blocks.forEach((code) => {
      const pre = code.parentElement;
      if (pre && !pre.hasAttribute('data-executable')) {
        pre.setAttribute('data-executable', 'true');
        pre.setAttribute('data-language', 'text/x-java');
      }
    });
    return blocks.length;
  };

  const msg = (text, err) => {
    let box = document.querySelector('.thebe-kernel-status');
    if (!box) {
      box = document.createElement('div');
      box.className = 'thebe-kernel-status';
      document.querySelector(SELECTOR)?.parentElement?.before(box);
      if (!box.isConnected) return;
    }
    box.textContent = text;
    box.classList.toggle('thebe-kernel-status-error', !!err);
  };

  const fail = (text) => {
    started = false;
    if (btn) btn.disabled = false;
    msg(text, true);
  };

  // ponytail: kein MutationObserver – bootstrap() rendert synchron; Nachzügler via Reload.
  const styleRuns = () =>
    document.querySelectorAll('.thebelab-run-button').forEach((b) => { b.innerHTML = '▶'; });

  function activate() {
    if (started) return;
    started = true;
    btn.disabled = true;
    msg('⏳ Jupyter wird gestartet (Binder, beim ersten Mal 1–3 Minuten) …', false);
    if (!window.thebelab?.bootstrap) return fail('Jupyter-Umgebung nicht geladen (Netzwerk/CDN?). Seite neu laden.');
    // ponytail: nur Events, kein pending.then – ready/failed/messages kommen alle hier an.
    window.thebelab.events?.on?.('status', (_e, d) => {
      if (!d) return;
      if (d.status === 'ready' && d.kernel?.name === 'java') msg('✓ Jupyter bereit (Java 25).', false);
      else if (d.status === 'ready') fail(`✗ Falscher Kernel '${d.kernel.name}' (Binder-Image prüfen).`);
      else if (d.status === 'failed') fail(`✗ Start fehlgeschlagen (${d.message || 'unbekannt'}). Bei Rate-Limit ~1h warten, Seite nicht neu laden.`);
      else if (d.message) msg(`⏳ ${d.message} …`, false);
    });
    try {
      window.thebelab.bootstrap({
        requestKernel: true, mountActivateWidget: false, mountStatusWidget: false,
        predefinedOutput: false, selector: '[data-executable]',
        binderOptions: { repo: 'MaximilianHertenstein/java_book', ref: 'main', binderUrl: 'https://mybinder.org' },
        kernelOptions: { name: 'java' },
        codeMirrorConfig: { mode: 'text/x-java' },
      });
      styleRuns();
    } catch (e) { fail(`✗ Thebe-Fehler: ${e?.message ?? e}`); }
  }

  function start() {
    if (!mark()) return; // keine java-exec-Blöcke → kein Button, kein Binder-Request
    const bar = document.querySelector('#mdbook-menu-bar .right-buttons');
    if (!bar) return;
    btn = document.createElement('button');
    btn.id = 'jupyter-start';
    btn.className = 'icon-button';
    btn.innerHTML = '▶';
    btn.title = 'Jupyter starten (Binder, Java 25 – erster Start 1–3 Minuten)';
    btn.setAttribute('aria-label', btn.title);
    btn.addEventListener('click', activate);
    bar.prepend(btn);
  }

  // ponytail: Skript läuft am Body-Ende (additional-js), DOMContentLoaded kommt immer noch.
  document.addEventListener('DOMContentLoaded', start);
})();
