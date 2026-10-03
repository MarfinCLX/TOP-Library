Library

A book-tracking app built as part of The Odin Project's Full Stack JavaScript curriculum — add books to a personal library, track their read status, and remove them, all stored in memory as JavaScript objects and rendered dynamically to the DOM.

🎯 Goals

- Practice constructor functions and the prototype chain (`Book.prototype`)
- Work with `crypto.randomUUID()` to give each book a stable, unique identifier
- Handle form submission with native HTML validation (`required` fields)
- Use event delegation instead of attaching a listener to every row individually
- Keep data and rendering separate: the books array is the single source of truth, the DOM is just a reflection of it, re-rendered after every change

 ✨ Features

- Add a new book via a form (title, author, pages, read status)
- Toggle a book's read status
- Remove a book from the library
- Each book gets a unique `id` (via `crypto.randomUUID()`) used to match DOM elements back to their underlying data

🛠 Tech Stack

- HTML5 — form markup with native validation
- CSS3 — table/layout styling
- JavaScript (Vanilla) — constructor functions, prototypes, DOM manipulation, event delegation

📁 Project Structure

```
library/
├── index.html      Page markup and form
├── style.css         Styling
├── script.js          Book constructor, rendering, event handling
└── README.md          Project documentation
```

Status

Complete.

---

Practice project — part of The Odin Project's Full Stack JavaScript curriculum.
