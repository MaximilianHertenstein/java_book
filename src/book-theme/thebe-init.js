window.thebeConfig = {
  requestKernel: true,
  binderOptions: {
    repo: "MaximilianHertenstein/java_book",
    ref: "main"
  },
  kernelOptions: {
    name: "python3"
  },
  selectors: {
    code: "pre code.language-python"
  }
};

window.addEventListener("load", () => {
  console.log("Bootstrapping Thebe…");
  thebelab.bootstrap();
});
