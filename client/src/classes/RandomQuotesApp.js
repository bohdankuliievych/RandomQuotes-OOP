import Quote from "./Quote.js";
import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuotePublicAPIBtn = document.getElementById(
      "random-quote-public-api-btn"
    );
    this.randomQuoteOwnAPIBtn = document.getElementById(
      "random-quote-own-api-btn"
    );
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
    this.randomQuotePublicAPIBtn.addEventListener("click", async () => {
      const result = await RandomQuote.getRandomQuoteViaPublicAPI();
      this.changeCurrentQuote(result);
    });
    this.randomQuoteOwnAPIBtn.addEventListener("click", async () => {
      const result = await RandomQuote.getRandomQuoteViaOwnAPI();
      this.changeCurrentQuote(result);
    });
  }
}

export default RandomQuotesApp;
