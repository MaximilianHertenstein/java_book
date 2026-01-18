window.addEventListener("load", () => {
  if (!window.thebelab || !thebelab.bootstrap) return;

  // Bootstrap with full Thebe defaults
  thebelab.bootstrap({
    requestKernel: true,
    binderOptions: window.thebeConfig.binderOptions,
    kernelOptions: window.thebeConfig.kernelOptions
  }).then(() => {
    // Apply Darcula theme to each code block
    document.querySelectorAll('.thebe-cell, .thebelab-cell').forEach(cell => {
      const cm = cell.querySelector('.CodeMirror');
      if (cm) cm.classList.add('cm-s-darcula');
    });
  }).catch(err => {
    console.error("Thebe bootstrap failed:", err);
  });
});
