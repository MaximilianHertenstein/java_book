// "Ausführen"-Button für ```python-Blöcke mit .py-execute.
// Lädt Pyodide erst beim ersten Klick (lazy).
(() => {
  const BASE = 'https://cdn.jsdelivr.net/pyodide/v0.26.0/full/';
  let pyodideP = null;

  const el = (tag, props) => Object.assign(document.createElement(tag), props);

  const loadPyodide = async () => {
    // ponytail: kein Doppelklick-Guard — zwei <script>-Tags laden dieselbe URL, harmlos.
    if (!window.loadPyodide)
      await new Promise((res, rej) => Object.assign(document.head.appendChild(document.createElement('script')), {
        src: `${BASE}pyodide.js`,
        onload: res,
        onerror: () => rej(new Error('Pyodide konnte nicht geladen werden.')),
      }));
    return (pyodideP ??= window.loadPyodide({ indexURL: BASE }).catch((e) => {
      pyodideP = null;
      throw e;
    }));
  };

  const rehighlight = (block) => {
    delete block.dataset.highlighted;
    (window.hljs?.highlightElement ?? window.hljs?.highlightBlock)?.(block);
  };

  // Nur Nutzer-Code ab File "<exec>" zeigen, internen Pyodide-Trace abschneiden.
  const cleanError = (err) => {
    const msg = String(err);
    const i = msg.indexOf('File "<exec>"');
    return (i < 0 ? msg : msg.slice(i)).trim();
  };

  // Editierter Code robust lesen: innerText bildet <br>/<div> aus
  // contentEditable-Umbrüchen auf \n ab, textContent würde Zeilen verkleben.
  const codeOf = (block) => block.innerText ?? block.textContent;

  // input(prompt): Frage im Dialog zeigen + Echo in die Ausgabe.
  // ponytail: blockierendes prompt(), kein Inline-Terminal; Upgrade bei Bedarf: py-editor nutzen.
  const patchInput = (pyodide) => pyodide.runPythonAsync(`
import builtins, js
def _input(prompt=""):
    v = js.prompt(str(prompt) or "Eingabe für input:")
    v = "" if v is None else str(v)
    print(f"{prompt}{v}")
    return v
builtins.input = _input
`);

  // Python-Strings mit repr() darstellen (Anführungszeichen), Rest direkt.
  const toDisplay = (pyodide, value) => {
    if (typeof value !== 'string') return value;
    const repr = pyodide.pyimport('builtins.repr');
    try {
      return repr(value);
    } finally {
      repr.destroy();
    }
  };

  async function run(block, btn, out) {
    if (btn.disabled) return;
    btn.disabled = true;
    out.hidden = false;
    out.classList.remove('py-output-error');
    out.textContent = 'Lädt Python-Umgebung …';
    try {
      const pyodide = await loadPyodide();
      const lines = [];
      const io = { batched: lines.push.bind(lines) };
      pyodide.setStdout(io);
      pyodide.setStderr(io);
      await patchInput(pyodide);

      out.textContent = 'Berechne …';
      const result = await pyodide.runPythonAsync(codeOf(block));
      if (result != null) lines.push(toDisplay(pyodide, result));
      out.textContent = lines.join('\n');
    } catch (e) {
      out.classList.add('py-output-error');
      out.textContent = cleanError(e);
    } finally {
      btn.disabled = false;
    }
  }

  function enhance(block) {
    const pre = block.parentElement;
    block.contentEditable = 'true';
    block.spellcheck = false;
    block.setAttribute('autocorrect', 'off');
    block.setAttribute('autocapitalize', 'off');
    block.addEventListener('blur', () => rehighlight(block));

    let bar = pre.querySelector('.buttons');
    if (!bar) {
      bar = el('div', { className: 'buttons' });
      pre.prepend(bar);
    }

    const btn = el('button', {
      type: 'button',
      className: 'py-play-btn',
      title: 'Ausführen (Strg+Enter)',
      'aria-label': 'Ausführen',
      innerHTML: document.getElementById('fa-play')?.innerHTML ?? '▶',
    });
    bar.prepend(btn);

    const out = el('div', { className: 'py-output', hidden: true });
    pre.after(out);

    btn.addEventListener('click', () => run(block, btn, out));
    block.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); btn.click(); }
    });
  }

  const start = () => document.querySelectorAll('code.language-python.py-execute').forEach(enhance);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
