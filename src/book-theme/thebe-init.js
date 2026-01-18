let statusInitialized = false;
let bootstrapAttempted = false;

window.addEventListener("load", () => {
  if (statusInitialized) return;
  statusInitialized = true;
  
  console.log("=== Thebe Initialization ===");
  
  // CRITICAL: Clear all Thebe cached sessions before bootstrap
  // This prevents reusing old cached Binder sessions with wrong repository
  console.log("Clearing cached Binder sessions...");
  Object.keys(localStorage).forEach(key => {
    if (key.includes('thebe') || key.includes('binder') || key.includes('server')) {
      console.log("Removing cached key:", key);
      localStorage.removeItem(key);
    }
  });
  Object.keys(sessionStorage).forEach(key => {
    if (key.includes('thebe') || key.includes('binder') || key.includes('server')) {
      console.log("Removing cached session key:", key);
      sessionStorage.removeItem(key);
    }
  });
  
  console.log("Window config:", window.thebeConfig?.binderOptions);
  console.log("Thebe library available:", typeof thebelab !== 'undefined');
  
  const executableBlocks = document.querySelectorAll('[data-executable]');
  console.log("Code blocks to execute:", executableBlocks.length);
  
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
  
  // Only proceed if we have code blocks
  if (executableBlocks.length === 0) {
    console.log("No code blocks to execute");
    return;
  }
  
  // Make sure config has correct values
  if (window.thebeConfig) {
    window.thebeConfig.requestKernel = false;
    window.thebeConfig.binderOptions = window.thebeConfig.binderOptions || {};
    window.thebeConfig.binderOptions.repo = "MaximilianHertenstein/java_book";
    window.thebeConfig.binderOptions.ref = "main";
    window.thebeConfig.binderOptions.binderUrl = "https://mybinder.org";
    window.thebeConfig.kernelOptions = window.thebeConfig.kernelOptions || {};
    window.thebeConfig.kernelOptions.name = "python3";
    console.log("Final config before bootstrap:", window.thebeConfig.binderOptions);
  }
  
  disableRunButtons();
  addStatusMessage('⏳ Initializing Thebe...', 'thebe-status-building');
  
  // Now manually bootstrap with explicit config passed to bootstrap
  if (thebelab && typeof thebelab.bootstrap === 'function') {
    console.log("Calling thebelab.bootstrap() with explicit options");
    bootstrapAttempted = true;
    
    // Create explicit bootstrap options - these override window.thebeConfig
    const bootstrapOptions = {
      requestKernel: true,
      binderOptions: {
        repo: "MaximilianHertenstein/java_book",
        ref: "main",
        binderUrl: "https://mybinder.org"
      },
      kernelOptions: {
        name: "python3"
      }
    };
    
    console.log("Bootstrap options:", bootstrapOptions);
    
    // Pass options directly to bootstrap
    thebelab.bootstrap(bootstrapOptions)
      .then(() => {
        console.log("Bootstrap successful");
        addStatusMessage('⏳ Connecting to Binder...', 'thebe-status-building');
      })
      .catch(err => {
        console.error("Bootstrap failed:", err);
        addStatusMessage('❌ Bootstrap failed: ' + err.message, 'thebe-status-failed');
      });
    
    // Set up event listeners
    if (thebelab.events) {
      thebelab.events.on('status', (event, data) => {
        console.log("Thebe status:", data.status, data);
        
        const statusMessages = {
          'building': { text: '⏳ Building environment (1-2 min)...', class: 'thebe-status-building' },
          'built': { text: '✓ Environment built', class: '' },
          'launching': { text: '🚀 Starting kernel...', class: '' },
          'server-ready': { text: '🔌 Server ready, connecting to kernel...', class: '' },
          'ready': { text: '✅ Ready', class: 'thebe-status-ready' }
        };
        
        if (statusMessages[data.status]) {
          const msg = statusMessages[data.status];
          addStatusMessage(msg.text, msg.class);
          
          if (data.status === 'ready') {
            enableRunButtons();
            console.log("Kernel ready, enabling buttons");
          }
        }
      });
    }
  } else {
    console.error("thebelab.bootstrap not available");
    addStatusMessage('❌ Thebe library not ready', 'thebe-status-failed');
  }
  
  // Fallback: enable after 30 seconds
  setTimeout(() => {
    const runBtn = document.querySelector('.thebelab-run-button');
    if (runBtn && runBtn.disabled) {
      console.log("Timeout (30s): enabling run buttons anyway");
      enableRunButtons();
      addStatusMessage('✅ Ready (timeout)', 'thebe-status-ready');
    }
  }, 30000);
});
