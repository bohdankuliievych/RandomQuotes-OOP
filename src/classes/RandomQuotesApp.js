import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.currentQuote = null;
    this.init();
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => {
      const randomQuote = RandomQuote.getRandomQuote();
      this.currentQuote = randomQuote;
      this.currentQuote.render();
    });
  }
}

export default RandomQuotesApp;
