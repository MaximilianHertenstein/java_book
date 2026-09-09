// Ausführbare Java-Blöcke über Jupyter (Binder + jjava-Kernel, Java 25).
// ```java, java-exec → Zelle; reine ```java-Blöcke bleiben statisch.
// Klick auf ▶ startet EINEN Binder-Build (Kontingent), danach ein Kernel pro Seite.
(() => {
  'use strict';
  const SELECTOR = 'pre > code.language-java.java-exec';
  // ponytail: eigener Prefix (statt thebe-default), damit ein Retry gezielt tote Sessions löschen kann.
  const SESSION_PREFIX = 'java-book-binder-';
  let started = false, btn = null;

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

  // Tote Saved-Session verwerfen, sonst loopt der Retry auf derselben 503
  // (thebe 0.8.2 validiert nur Alter + ein einmaliges listRunning).
  const dropSavedSessions = () => {
    try {
      const store = window.localStorage;
      for (let i = store.length - 1; i >= 0; i--) {
        const k = store.key(i);
        if (k?.startsWith(SESSION_PREFIX)) store.removeItem(k);
      }
    } catch { /* z.B. Private Mode – egal */ }
  };

  // ponytail: kein MutationObserver – bootstrap() rendert synchron; Nachzügler via Reload.
  // Leiste wie mdBooks `pre > .buttons` (Form/Größe unverändert lassen).
  const styleCells = () =>
    document.querySelectorAll('.thebelab-cell').forEach((cell) => {
      let bar = cell.querySelector('.buttons');
      if (!bar) {
        bar = document.createElement('div');
        bar.className = 'buttons';
        const run = cell.querySelector('.thebelab-run-button');
        if (run) bar.appendChild(run);
        (cell.querySelector('.thebelab-input') ?? cell).prepend(bar);
      }
      const run = bar.querySelector('.thebelab-run-button');
      if (run) run.innerHTML = document.getElementById('fa-play')?.innerHTML ?? '▶';
      if (!bar.querySelector('.clip-button')) {
        const btn = document.createElement('button');
        btn.className = 'clip-button';
        btn.title = 'Copy to clipboard';
        btn.setAttribute('aria-label', btn.title);
        btn.addEventListener('click', () => {
          const code = cell.querySelector('.CodeMirror-code')?.innerText ?? '';
          if (navigator.clipboard?.writeText) navigator.clipboard.writeText(code).catch(() => fallbackCopy(code));
          else fallbackCopy(code);
        });
        bar.appendChild(btn);
      }
    });

  // ponytail: execCommand-Fallback für nicht-sichere Kontexte; weg damit, sobald überall https.
  const fallbackCopy = (code) => {
    const ta = Object.assign(document.createElement('textarea'), { value: code });
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch { /* ignorieren */ }
    ta.remove();
  };

  function activate() {
    if (started) return;
    started = true;
    btn.disabled = true;
    msg('⏳ Jupyter wird gestartet (Binder, beim ersten Mal 1–3 Minuten) …', false);
    if (!window.thebelab?.bootstrap) return fail('Jupyter-Umgebung nicht geladen (Netzwerk/CDN?). Seite neu laden.');
    window.thebelab.events?.on?.('status', (_e, d) => {
      if (!d) return;
      if (d.status === 'ready' && d.kernel?.name === 'java') msg('✓ Jupyter bereit (Java 25).', false);
      else if (d.status === 'ready') fail(`✗ Falscher Kernel '${d.kernel.name}' (Binder-Image prüfen).`);
      else if (d.status === 'failed') fail(`✗ Start fehlgeschlagen (${d.message || 'unbekannt'}). Bei Rate-Limit ~1h warten, Seite nicht neu laden.`);
      else if (d.message) msg(`⏳ ${d.message} …`, false);
    });
    try {
      // ponytail: bootstrap() gibt den Kernel-Promise zurück – Rejection (z.B. tote Session → 503)
      // hier abfangen, sonst hängt die UI ewig auf ⏳ (Status-Events kommen in dem Pfad keine).
      window.thebelab.bootstrap({
        requestKernel: true, mountActivateWidget: false, mountStatusWidget: false,
        selector: '[data-executable]',
        binderOptions: { repo: 'MaximilianHertenstein/java_book', ref: 'main', binderUrl: 'https://mybinder.org', savedSession: { storagePrefix: SESSION_PREFIX } },
        kernelOptions: { name: 'java' },
        codeMirrorConfig: { mode: 'text/x-java' },
      })?.then?.(undefined, (e) => {
        dropSavedSessions();
        fail(`✗ Start fehlgeschlagen (${e?.message ?? e}). Erneut auf ▶ klicken.`);
      });
      styleCells();
    } catch (e) { fail(`✗ Thebe-Fehler: ${e?.message ?? e}`); }
  }

  function start() {
    const blocks = document.querySelectorAll(SELECTOR);
    if (!blocks.length) return; // keine java-exec-Blöcke → kein Button, kein Binder-Request
    blocks.forEach((code) => {
      const pre = code.parentElement;
      pre?.setAttribute('data-executable', 'true');
      pre?.setAttribute('data-language', 'text/x-java');
    });
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
