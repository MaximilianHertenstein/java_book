window.addEventListener("load", () => {
  if (!window.thebelab || !thebelab.bootstrap) return;

  console.log("Bootstrapping Thebe with config:", window.thebeConfig);
  
  // Manually bootstrap with explicit config
  thebelab.bootstrap(window.thebeConfig);
  
  // Apply mode after a short delay to ensure CodeMirror is ready
  setTimeout(applyJavaMode, 1000);
});

// Wait until Thebe creates the CodeMirror editors, then force Java mode
document.addEventListener("thebe:ready", () => {
  console.log("thebe:ready event fired");
  applyJavaMode();
  
  // Re-apply when new cells appear
  const observer = new MutationObserver(() => {
    applyJavaMode();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

function applyJavaMode() {
  console.log("Applying Java mode and theme to CodeMirror editors");
  document.querySelectorAll(".thebe-cell .CodeMirror, .thebelab-cell .CodeMirror").forEach(cmEl => {
    if (cmEl.CodeMirror) {
      const cm = cmEl.CodeMirror;
      const CM = cm.constructor || CodeMirror;
      const hasSameCtor = CM === CodeMirror;

      console.log("CodeMirror constructor check - same as global:", hasSameCtor);
      console.log("Available modes before setup:", Object.keys(CM.modes || {}));

      // If clike is not available, we need to load it dynamically
      if (CM && !CM.modes.clike) {
        console.log("clike mode missing, attempting dynamic load...");
        loadClikeMode(CM, () => {
          setupJavaMode(cm, CM);
        });
      } else if (CM && CM.modes && CM.modes.clike) {
        setupJavaMode(cm, CM);
      } else {
        console.warn("Cannot setup Java mode - CodeMirror or modes unavailable", { CM });
      }
    }
  });
}

function loadClikeMode(CM, callback) {
  // Create a script to load clike into the CodeMirror namespace
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.15/mode/clike/clike.min.js';
  script.onload = () => {
    console.log("clike mode loaded dynamically");
    // After clike is loaded globally, copy it to the Thebe CodeMirror constructor
    if (window.CodeMirror && window.CodeMirror.modes && window.CodeMirror.modes.clike && !CM.modes.clike) {
      CM.modes.clike = window.CodeMirror.modes.clike;
      console.log("clike mode registered on Thebe CodeMirror constructor");
    }
    callback();
  };
  script.onerror = () => {
    console.error("Failed to load clike mode");
    callback();
  };
  document.head.appendChild(script);
}

function setupJavaMode(cm, CM) {
  const mode = cm.getOption("mode");
  console.log("Current mode:", mode);
  console.log("Mode object before setup:", cm.getMode());
  console.log("Available modes on CodeMirror constructor:", Object.keys(CM.modes || {}));

  // Java keyword and type configuration for clike
  const javaConfig = {
    useCPP: false,
    keywords: {
      "if": true, "while": true, "with": true, "else": true, "do": true,
      "try": true, "finally": true, "catch": true, "for": true,
      "switch": true, "case": true, "default": true,
      "break": true, "continue": true, "goto": true, "return": true,
      "class": true, "interface": true, "enum": true, "extends": true, "implements": true,
      "public": true, "private": true, "protected": true, "static": true, "final": true, "abstract": true,
      "synchronized": true, "volatile": true, "transient": true, "native": true,
      "import": true, "package": true, "new": true, "instanceof": true, "this": true, "super": true,
      "true": true, "false": true, "null": true, "void": true,
      "throws": true, "assert": true
    },
    types: {
      "int": true, "long": true, "float": true, "double": true, "boolean": true, "byte": true, "short": true, "char": true,
      "Integer": true, "Long": true, "Float": true, "Double": true, "Boolean": true, "Byte": true, "Short": true, "Character": true,
      "String": true, "Object": true, "Class": true, "Array": true, "List": true, "Map": true, "Set": true,
      "Exception": true, "Throwable": true, "RuntimeException": true, "IOException": true
    }
  };

  // Define Java modes
  if (!CM.modes["text/x-java"] && CM.modes.clike) {
    CM.defineMode("text/x-java", function(config, parserConfig) {
      const mode = CM.modes.clike(config, Object.assign({}, parserConfig, javaConfig));
      mode.name = "clike";
      return mode;
    });
    console.log("Registered text/x-java mode with Java keywords");
  }

  if (!CM.modes.java && CM.modes.clike) {
    CM.defineMode("java", function(config, parserConfig) {
      const mode = CM.modes.clike(config, Object.assign({}, parserConfig, javaConfig));
      mode.name = "clike";
      return mode;
    });
    console.log("Registered java mode with Java keywords");
  }

  // Define MIME types
  if (CM.defineMIME) {
    CM.defineMIME("text/x-java", "text/x-java");
    CM.defineMIME("text/java", "text/x-java");
    console.log("Registered MIME types");
  }

  // Force Java MIME mode and theme
  cm.setOption("mode", "text/x-java");
  cm.setOption("theme", "dracula");
  
  cm.refresh();
  cm.display.wrapper.classList.add('cm-s-dracula');
  
  console.log("Mode after set:", cm.getOption("mode"));
  console.log("Mode object after set:", cm.getMode());
  console.log("Theme set to dracula");
}