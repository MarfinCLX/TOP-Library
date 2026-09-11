const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
  throw Error("You must use the 'new' operator to call the constructor"); 
  }
  this.id = crypto.randomUUID(),
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "JRR", 295, "Ready");

console.log(myLibrary)


/* function TheHobbit () {
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

*/