window.addEventListener("load", () => {
  if (!window.thebelab || !thebelab.bootstrap) return;

  // Bootstrap with full Thebe config
  thebelab.bootstrap({
    requestKernel: true,
    selector: window.thebeConfig.selector,
    binderOptions: window.thebeConfig.binderOptions,
    kernelOptions: window.thebeConfig.kernelOptions,
    codeMirrorConfig: window.thebeConfig.codeMirrorConfig
  }).then(() => {
    applyJavaMode();
  }).catch(err => {
    console.error("Thebe bootstrap failed:", err);
  });
});

// Wait until Thebe creates the CodeMirror editors, then force Java mode
document.addEventListener("thebe:ready", () => {
  applyJavaMode();
  
  // Re-apply when new cells appear
  const observer = new MutationObserver(applyJavaMode);
  observer.observe(document.body, { childList: true, subtree: true });
});

function applyJavaMode() {
  console.log("Applying Java mode and theme to CodeMirror editors");
  document.querySelectorAll(".thebe-cell .CodeMirror, .thebelab-cell .CodeMirror").forEach(cmEl => {
    if (cmEl.CodeMirror) {
      console.log("Setting mode to text/x-java and theme to dracula");
      cmEl.CodeMirror.setOption("mode", "text/x-java");
      cmEl.CodeMirror.setOption("theme", "dracula");
      cmEl.CodeMirror.refresh();
      cmEl.classList.add('cm-s-dracula');
    }
  });
}