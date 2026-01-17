// Thebe configuration
window.thebeConfig = {
  binderOptions: {
    repo: "MaximilianHertenstein/java_book", // your GitHub repo
    ref: "main",                             // branch
  },
  kernelOptions: {
    name: "java",                             // JJava kernel
  },
  codeMirrorConfig: {
    theme: "default",
    lineNumbers: true,
  },
  preExecute: true  // Automatically activate cells and show Run buttons
};

// Load Thebe JS automatically
document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/thebe@0.9.2/lib/index.js";
  script.async = true;
  document.body.appendChild(script);

  script.onload = () => {
    console.log("Thebe loaded. All code cells are now executable!");
  };
});
