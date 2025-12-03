const express = require("express");
const quotes = require("./data/quotes");
const app = express();
const PORT = 3000;

function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/quotes/random", (req, res) => {
  const randomQuote = getRandomQuote(quotes);
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API on port ${PORT}`);
  console.log("localhost:3000");
});
