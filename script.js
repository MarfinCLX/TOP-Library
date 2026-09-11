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
addBookToLibrary("1984", "George Orwell", 328, "Ready");

console.log(myLibrary);

function filterLibrary () {
  const div = document.querySelector('.table-container');
  const table = document.querySelector('.table')

  myLibrary.map(book => {
    const tbody = document.createElement('tbody');

    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;

    const statusCell = document.createElement('td');
    statusCell.textContent = book.status;

    row.append(titleCell, authorCell, pagesCell, statusCell);
    tbody.appendChild(row);
    table.appendChild(tbody);
    div.appendChild(table);
  })
}

filterLibrary();

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