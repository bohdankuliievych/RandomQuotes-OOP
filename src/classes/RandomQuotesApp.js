import Quote from "./Quote.js";
import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuoteAPIBtn = document.getElementById("random-quote-api-btn");
    this.currentQuote = null;
    this.init();
  }
  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.currentQuote.render();
    }
  }
  init() {
    this.randomQuoteBtn.addEventListener("click", () => {
      const randomQuote = RandomQuote.getRandomQuote();
      this.changeCurrentQuote(randomQuote);
    });
    this.randomQuoteAPIBtn.addEventListener("click", () => {
      RandomQuote.getRandomQuoteViaAPI().then((result) => {
        this.changeCurrentQuote(result);
      });
    });
  }
}

export default RandomQuotesApp;
