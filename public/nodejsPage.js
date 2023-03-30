document.addEventListener("DOMContentLoaded", () => {
  hljs.initHighlightingOnLoad();
  const copyButton1 = document.getElementById("copy-button-1");
  const codeBlock1 = document.getElementById("code-1");

  function copyTextHandler(button, codeBlock) {
    navigator.clipboard.writeText(codeBlock.innerText).then(
      () => {
        button.textContent = `Copied!`;
        setTimeout(() => {
          button.textContent = `Copy`;
        }, 2500);
      },
      () => {
        console.log("error writing to the clipboard");
      }
    );
  }

  copyButton1.addEventListener("click", () => {
    copyTextHandler(copyButton1, codeBlock1);
  });


});
