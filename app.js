const btn = document.querySelector(".btn");
const section = document.querySelector("section");
const author = document.querySelector(".author");
const quote = document.querySelector(".quote");
let randomQuote = {};
let min = 1;
let max = 100;

const getQuotes = async (random) => {
  console.log(random);
  allQuotes = [];
  const res = await fetch(`https://dummyjson.com/quotes/${random}`);
  const data = await res.json();
  randomQuote = data;
  quote.textContent = "";
  author.textContent = "";
  quote.textContent = randomQuote.quote;
  author.textContent = randomQuote.author;
};
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  getQuotes(random);
});
