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

addBookToLibrary("The Hobbit", "JRR", 295, "Readed");
addBookToLibrary("1984", "George Orwell", 328, "Readed");

console.log(myLibrary);

function filterLibrary () {
  const div = document.querySelector('.table-content');
  const table = document.querySelector('.table')

  table.querySelectorAll('tbody').forEach(tbody => tbody.remove());

  myLibrary.map(book => {
    const tbody = document.createElement('tbody');

    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;

    const readCell = document.createElement('td');
    readCell.textContent = book.read;

    row.append(titleCell, authorCell, pagesCell, readCell);
    tbody.appendChild(row);
    table.appendChild(tbody);
    div.appendChild(table);
  })
}

filterLibrary();

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const bookPages = document.getElementById('bookPages').value;
  const isRead = document.getElementById('isRead').checked;
  const readStatus = isRead ? "Readed" : "Not Readed";

  addBookToLibrary(bookTitle, bookAuthor, bookPages, readStatus);
  filterLibrary();
})

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