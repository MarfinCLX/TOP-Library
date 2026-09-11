function TheHobbit () {
     if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  };

  this.title = "The Hobbit",
  this.author = "J.R.R",
  this.pages = 295,
  this.read = "Not ready yet",
  this.getInfo = function info () {
    console.log(`${this.title} by ${this.author}. Tolkien, ${this.pages} pages, ${this.read}`);
  };
};

const book = new TheHobbit();

book.getInfo();