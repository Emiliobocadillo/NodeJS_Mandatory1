document.addEventListener("DOMContentLoaded", () => {
  hljs.initHighlightingOnLoad();
  const copyButton1 = document.getElementById("copy-button-1");
  const codeBlock1 = document.getElementById("code-1");

  const copyButton2 = document.getElementById("copy-button-2");
  const codeBlock2 = document.getElementById("code-2");

  const copyButton3 = document.getElementById("copy-button-3");
  const codeBlock3 = document.getElementById("code-3");

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
  copyButton2.addEventListener("click", () => {
    copyTextHandler(copyButton2, codeBlock2);
  });
  copyButton3.addEventListener("click", () => {
    copyTextHandler(copyButton3, codeBlock3);
  });
});
