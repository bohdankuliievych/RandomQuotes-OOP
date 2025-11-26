class Quote {
  constructor(id, text, author) {
    this.author = author;
    this.id = id;
    this.text = text;
  }
  render() {
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    quoteElement.textContent = this.text;
    authorElement.textContent = this.author;
  }
}

export default Quote;
