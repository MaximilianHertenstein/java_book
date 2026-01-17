window.thebeConfig = {
  binderOptions: {
    repo: "MaximilianHertenstein/java_book",
    ref: "main",
  },
  kernelOptions: {
    name: "java",
  },
  codeMirrorConfig: {
    theme: "default",
    lineNumbers: true,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/thebe@0.9.2/lib/index.js";
  script.async = true;
  document.body.appendChild(script);
});
