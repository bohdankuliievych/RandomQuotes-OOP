const express = require("express");
const cors = require("cors");
const quotes = require("./data/quotes");
const app = express();
const PORT = 3000;
const corsOptions = {
  origin: "*",
};

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.use(cors(corsOptions));

app.get("/quotes/random", (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API on port ${PORT}`);
});
