import MathUtils from "../utils/MathUtils.js";
import { quotes } from "../data/quotes.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static async getRandomQuoteViaAPI() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return new Quote(data.id, data.quote, data.author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
