const colors = ["red", "blue", "green"];

colors.forEach((color) => {
  const div = document.createElement("div");
  div.style.backgroundColor = color;
  div.style.width = "100px";
  div.style.height = "100px";
  const coloredCubesContainer = document
    .getElementById("coloredSquaresContainer")
    .appendChild(div);
});

document.addEventListener("DOMContentLoaded", () => {
  hljs.initHighlightingOnLoad();
  const copyButton1 = document.getElementById("copy-button-1");
  const codeBlock1 = document.getElementById("code-1");

  const copyButton2 = document.getElementById("copy-button-2");
  const codeBlock2 = document.getElementById("code-2");

  const copyButton3 = document.getElementById("copy-button-3");
  const codeBlock3 = document.getElementById("code-3");
 
  const copyButton4 = document.getElementById("copy-button-4");
  const codeBlock4 = document.getElementById("code-4");

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
  copyButton4.addEventListener("click", () => {
    copyTextHandler(copyButton4, codeBlock4);
  });
});

const shoppingCartUSD = [
  { productName: "T-shirt", price: 15 },
  { productName: "Pants", price: 35 },
  { productName: "Shoes", price: 100 },
];

const shoppingCartDKK = shoppingCartUSD.map((item) => ({
  ...item,
  price: item.price * 6.86,
}));



const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const quotebtn = document.querySelector("#quote-btn");
quotebtn.addEventListener("click", getQuote);
function getQuote() {
  fetch("http://quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerText = `"${data.content}"`;
      author.innerText = data.author;
    });
}

getQuote();

