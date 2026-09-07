// Thebe-Bootstrap für ausführbare Java-Blöcke (Binder + jjava-Kernel, Java 25).
//
// mdBook rendert ```java, <alias> als <code class="language-java <alias>">.
// Als Jupyter-Zelle markiert werden: java-exec (Standard) sowie die alten
// Aliase jupyter/thebe/java-execute/java-run/cheerpj. Letztere gab es früher
// für den Browser-Runner (CheerpJ, Java 8, entfernt) – sie laufen jetzt
// ebenfalls über Jupyter, damit überall Java 25 gilt (Records, IO.println,
// IO.readln, ...). Reine ```java-Blöcke ohne Alias bleiben statisch.
//
// WICHTIG (thebe 0.8.2 + @jupyterlab/services v6): Der Kernel-Name steht in
// `kernelOptions.name` (geht direkt an KernelManager.startNew). `kernelName`
// wird zusätzlich gesetzt (von 0.8.2 ignoriert, von 0.9 erwartet) – so landet
// Java-Code garantiert im "java"-Kernel statt im Python-Standardkernel
// (der gab sonst SyntaxError auf Java-Code).
//
// Buttons: Thebe 0.8.2 erzeugt pro Zelle immer run/restart/restart&run-all
// (kein Config-Schalter). Restart-Buttons werden hier per JS entfernt – es
// bleibt nur Run, gestylt exakt wie der mdBook-Playground-Button
// (pre > .buttons > button.play-button mit #fa-play-SVG).
(() => {
  'use strict';

  const THEBE_ALIASES = ['java-exec', 'jupyter', 'thebe', 'java-execute', 'java-run', 'cheerpj'];
  const SELECTOR = THEBE_ALIASES.map((a) => `pre > code.language-java.${a}`).join(',');
  const EXPECTED_KERNEL = 'java';

  const THEBE_CONFIG = {
    requestKernel: true,
    mountActivateWidget: false,
    mountStatusWidget: false,
    predefinedOutput: false,
    selector: '[data-executable]',
    binderOptions: {
      repo: 'MaximilianHertenstein/java_book',
      ref: 'main',
      binderUrl: 'https://mybinder.org',
      codeMirrorConfig: {
        theme: 'default',
        mode: 'text/x-java',
        lineWrapping: true,
        lineNumbers: false,
      },
    },
    kernelOptions: {
      name: EXPECTED_KERNEL,
      kernelName: EXPECTED_KERNEL,
      path: '.',
    },
    codeMirrorConfig: {
      theme: 'default',
      mode: 'text/x-java',
      lineWrapping: true,
      lineNumbers: false,
    },
  };

  function firstCellPre() {
    return document.querySelector(SELECTOR)?.parentElement ?? null;
  }

  function markCells() {
    const blocks = document.querySelectorAll(SELECTOR);
    blocks.forEach((code) => {
      const pre = code.parentElement;
      if (!pre || pre.hasAttribute('data-executable')) return;
      pre.setAttribute('data-executable', 'true');
      // CodeMirror-Modus (render.js: data-language || "python"!). text/x-java
      // aktiviert das Java-Clike-Highlighting statt Python.
      pre.setAttribute('data-language', 'text/x-java');
    });
    return blocks.length;
  }

  function statusBox() {
    let box = document.querySelector('.thebe-kernel-status');
    if (!box) {
      box = document.createElement('div');
      box.className = 'thebe-kernel-status';
      const anchor = document.querySelector('.thebelab-cell') ?? firstCellPre();
      if (anchor) anchor.before(box);
      else document.body.prepend(box);
    }
    return box;
  }

  function setStatus(text, isError) {
    const box = statusBox();
    box.textContent = text;
    box.classList.toggle('thebe-kernel-status-error', !!isError);
  }

  function checkKernel(kernel) {
    const name = kernel?.name ?? null;
    if (name === EXPECTED_KERNEL) {
      setStatus(`✓ Jupyter bereit (Kernel: ${name}, Java 25).`, false);
    } else if (name) {
      setStatus(
        `✗ Falscher Kernel verbunden: '${name}' statt '${EXPECTED_KERNEL}'. ` +
          'Java-Code kann so nicht laufen (Binder-Image prüfen: environment.yml + postBuild).',
        true
      );
    }
  }

  // Nur der Run-Button bleibt – exakt wie mdBooks Playground-Button:
  // <button class="play-button"> mit dem #fa-play-SVG aus dem mdBook-Theme.
  function styleRunButton(runBtn) {
    if (!runBtn || runBtn.dataset.mdbookStyled === 'true') return;
    runBtn.dataset.mdbookStyled = 'true';
    runBtn.textContent = '';
    runBtn.classList.add('play-button');
    runBtn.title = 'Run this code';
    runBtn.setAttribute('aria-label', 'Java-Code ausführen (Jupyter, Java 25)');
    const playSvg = document.getElementById('fa-play')?.innerHTML;
    runBtn.innerHTML = playSvg ?? '▶';
  }

  function tidyCell(cell) {
    if (!(cell instanceof HTMLElement)) return;
    // Restart & Restart-all entfernen (nur Run bleibt).
    cell
      .querySelectorAll('.thebelab-restart-button, .thebelab-restartall-button')
      .forEach((b) => b.remove());
    const runBtn = cell.querySelector('.thebelab-run-button');
    if (runBtn) styleRunButton(runBtn);
  }

  function tidyAllCells() {
    document.querySelectorAll('.thebelab-cell').forEach(tidyCell);
  }

  function observeCells() {
    // renderAllCells läuft synchron in bootstrap(), aber zusätzlich
    // beobachten (robust gegen Nachzügler / Theme-Wechsel-Re-Renders).
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.classList?.contains('thebelab-cell')) tidyCell(node);
          else node.querySelectorAll?.('.thebelab-cell').forEach(tidyCell);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function bindStatus() {
    setStatus('⏳ Jupyter wird gestartet (Binder, beim ersten Mal 1–3 Minuten) …', false);
    try {
      window.thebelab.events.on('status', (_event, data) => {
        if (!data) return;
        if (data.status === 'ready' && data.kernel) checkKernel(data.kernel);
        else if (data.status === 'failed') {
          setStatus(
            `✗ Jupyter-Start fehlgeschlagen (${data.message || 'unbekannter Fehler'}). ` +
              'Bei "Rate limit exceeded": MyBinder begrenzt Builds pro Stunde – ca. 1 Stunde warten ' +
              'und die Seite in der Zwischenzeit NICHT dauernd neu laden (jeder Reload zählt mit). ' +
              'Sonst: Seite neu laden oder später erneut versuchen.',
            true
          );
        } else if (data.message) {
          setStatus(`⏳ ${data.message} …`, false);
        }
      });
    } catch (_) {
      /* Status bleibt auf Startmeldung stehen */
    }
  }

  function showLoadError() {
    const anchor = firstCellPre();
    if (!anchor || document.querySelector('.thebe-load-error')) return;
    const hint = document.createElement('div');
    hint.className = 'thebe-load-error';
    hint.textContent =
      'Die Jupyter-Umgebung konnte nicht geladen werden (Netzwerk oder CDN blockiert?). ' +
      'Seite neu laden oder später erneut versuchen.';
    anchor.before(hint);
  }

  // Klick-Start statt Auto-Start (seit 09/2026): Jeder Binder-Build-Request
  // zählt gegen das knappe MyBinder-Kontingent – Auto-Start bei jedem
  // Seitenaufruf (mal 30 Schüler) läuft sofort in 429-Rate-Limits. Erst der
  // explizite Klick löst EINEN Build aus; danach teilen sich alle Zellen
  // der Seite denselben Kernel.
  function renderStartButton() {
    const box = statusBox();
    box.classList.remove('thebe-kernel-status-error');
    box.textContent = '';
    const label = document.createElement('span');
    label.textContent =
      'Java-Code auf dieser Seite läuft über Jupyter (Binder, Java 25). Erster Start dauert 1–3 Minuten, danach ist das Image im Cache. ';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'thebe-start-button';
    btn.textContent = '▶ Jupyter jetzt starten';
    btn.addEventListener('click', () => {
      btn.disabled = true;
      activate();
    });
    box.append(label, btn);
  }

  function activate() {
    observeCells();
    if (window.thebelab?.bootstrap) {
      bindStatus();
      try {
        const pending = window.thebelab.bootstrap(THEBE_CONFIG);
        // Zellen sind nach bootstrap() synchron gerendert -> sofort aufräumen.
        tidyAllCells();
        pending?.then?.(checkKernel, () => {
          setStatus(
            '✗ Kernel-Anfrage abgelehnt (gibt es den Kernel "java" im Binder-Image? environment.yml + postBuild prüfen). Seite neu laden.',
            true
          );
        });
      } catch (error) {
        setStatus(`✗ Thebe-Fehler: ${error?.message ?? error}`, true);
      }
    } else {
      showLoadError();
    }
  }

  function start() {
    if (markCells() === 0) return; // keine ausführbaren Blöcke -> nur Statusbox, kein Binder-Request
    renderStartButton();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
