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

Book.prototype.toggleRead = function () {
  this.read = !this.read;
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
    readCell.textContent = book.read ? "Readed" : "Not Readed";

    const toggleReadBtnCell = document.createElement('td');
    const toggleReadtn = document.createElement('button');
    toggleReadtn.textContent = "Change Read Status";
    toggleReadtn.classList.add('toggle-read-btn');
    toggleReadtn.dataset.id = book.id;
    toggleReadBtnCell.appendChild(toggleReadtn);

    const deleteBtnCell = document.createElement('td');
    const deleteBookBtn = document.createElement('button');
    deleteBookBtn.textContent = "Delete Book";
    deleteBookBtn.classList.add('delete-btn');
    deleteBookBtn.dataset.id = book.id;

    deleteBtnCell.appendChild(deleteBookBtn);
    row.append(titleCell, authorCell, pagesCell, readCell, toggleReadBtnCell,deleteBtnCell);
    tbody.appendChild(row);
    table.appendChild(tbody);
    div.appendChild(table);

    tbody.addEventListener('click', e => {
      if (!e.target.classList.contains('delete-btn')) return;

      const bookId = e.target.dataset.id;
      const index = myLibrary.findIndex(book => book.id === bookId);

      if (index !== -1) {
        myLibrary.splice(index, 1);
      };

      filterLibrary();
    });
    tbody.addEventListener('click', e => {
      if (!e.target.classList.contains('toggle-read-btn')) return;

      const bookId = e.target.dataset.id;
      const book = myLibrary.find(b => b.id === bookId);

      book.toggleRead();
      filterLibrary();
    });
  });
};

filterLibrary();

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const bookPages = document.getElementById('bookPages').value;
  const isRead = document.getElementById('isRead').checked;

  addBookToLibrary(bookTitle, bookAuthor, bookPages, isRead);
  filterLibrary();
})
