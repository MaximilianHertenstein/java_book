// Mark Python code blocks as executable before Thebe loads
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre code.language-python").forEach((codeBlock) => {
    const pre = codeBlock.parentElement;
    pre.setAttribute("data-executable", "true");
    pre.setAttribute("data-language", "python");
    // Remove the buttons div that mdbook adds
    const buttonsDiv = pre.querySelector('.buttons');
    if (buttonsDiv) {
      buttonsDiv.remove();
    }
  });
});

window.thebeConfig = {
  requestKernel: true,
  binderOptions: {
    repo: "MaximilianHertenstein/java_book",
    ref: "main"
  },
  kernelOptions: {
    name: "python3"
  },
  selector: "pre[data-executable]",
  codeMirrorConfig: {
    theme: "default",
    lineNumbers: true,
    matchBrackets: true,
    mode: "python",
    readOnly: false,
    viewportMargin: 10
  }
};

window.addEventListener("load", () => {
  console.log("Bootstrapping Thebe…");
  thebelab.bootstrap();
  
  // Disable all run buttons until kernel is ready
  const disableRunButtons = () => {
    document.querySelectorAll('.thebelab-run-button').forEach(btn => {
      btn.disabled = true;
      btn.textContent = 'connecting...';
    });
  };
  
  const enableRunButtons = () => {
    document.querySelectorAll('.thebelab-run-button').forEach(btn => {
      btn.disabled = false;
      btn.textContent = 'run';
    });
  };
  
  // Add status message element
  const addStatusMessage = (message, className = '') => {
    document.querySelectorAll('.thebelab-controls').forEach(controls => {
      let statusEl = controls.querySelector('.thebe-status-message');
      if (!statusEl) {
        statusEl = document.createElement('span');
        statusEl.className = 'thebe-status-message';
        controls.appendChild(statusEl);
      }
      statusEl.textContent = message;
      statusEl.className = 'thebe-status-message ' + className;
    });
  };
  
  disableRunButtons();
  
  thebelab.events.on('status', (event, data) => {
    console.log("Thebe status:", data.status, data);
    
    const statusMessages = {
      'building': { text: '⏳ Building environment (1-2 min)...', class: 'thebe-status-building' },
      'built': { text: '✓ Environment built', class: '' },
      'launching': { text: '🚀 Starting kernel...', class: '' },
      'ready': { text: '✅ Ready', class: 'thebe-status-ready' },
      'failed': { text: '❌ Connection failed', class: 'thebe-status-failed' }
    };
    
    if (statusMessages[data.status]) {
      const msg = statusMessages[data.status];
      addStatusMessage(msg.text, msg.class);
      
      if (data.status === 'ready') {
        enableRunButtons();
      } else if (data.status === 'failed') {
        addStatusMessage('❌ Failed. Refresh page to retry.', 'thebe-status-failed');
      }
    }
  });
});

window.addEventListener("load", () => {
  console.log("Bootstrapping Thebe…");
  thebelab.bootstrap();
  
  thebelab.events.on('status', (event, data) => {
    console.log("Thebe status:", data.status);
    if (data.status === 'ready') {
      console.log("Thebe is ready! Run buttons should be visible.");
    }
  });
});
