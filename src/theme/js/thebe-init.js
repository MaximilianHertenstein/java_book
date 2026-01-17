window.thebeConfig = {
  binderOptions: {
    repo: "MaximilianHertenstein/java_book",
    ref: "main",
  },
  kernelOptions: {
    name: "python3",
  },
  preExecute: false,
  selectors: {
    code: "pre > code.language-python"
  }
};

// Create script dynamically, without async
const script = document.createElement("script");
script.src = "https://unpkg.com/thebe@0.9.2/lib/index.js";
script.onload = () => {
  console.log("Thebe loaded — initializing Python...");
  thebelab.bootstrap();
};
document.body.appendChild(script);