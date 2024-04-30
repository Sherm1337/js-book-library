const myLibrary = [];

function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = `${myLibrary.length}`;
}

const bookshelf = document.querySelector(".bookshelf");

const theHobbit = addBookToLibrary("The Hobbit", "J.R.R Tolkien", 500);
const bible = addBookToLibrary("The Bible", "Big Guy Upstairs", "A lot of");

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);

    myLibrary.push(book);

    const newBookDiv = document.createElement("div");
    newBookDiv.classList.add("book");
    bookshelf.appendChild(newBookDiv);

    const newTitleDiv = document.createElement("div");
    newTitleDiv.classList.add("book-title");
    newBookDiv.appendChild(newTitleDiv);

    const newTitleP = document.createElement("p");
    newTitleP.textContent = "title";
    newTitleDiv.appendChild(newTitleP);

    const newAuthorDiv = document.createElement("div");
    newAuthorDiv.classList.add("book-author");
    newBookDiv.appendChild(newAuthorDiv);

    const newAuthorP = document.createElement("p");
    newAuthorDiv.appendChild(newAuthorP);

    const newPagesDiv = document.createElement("div");
    newPagesDiv.classList.add("book-pages");
    newBookDiv.appendChild(newPagesDiv);

    const newPagesNum = document.createElement("p");
    newPagesDiv.appendChild(newPagesNum);

    const deleteButton = document.createElement("button");
    newBookDiv.appendChild(deleteButton);
    deleteButton.classList.add(`${myLibrary.length - 1}`)
    deleteButton.textContent = "Delete Book";

    deleteButton.addEventListener("click", () => {
        function CallbackFunctionToFindBookById(book) {
            return book.id === `${deleteButton.classList.value}`;
        }
        const bookToDelete = myLibrary.find(CallbackFunctionToFindBookById);
        myLibrary.splice(parseInt(bookToDelete.id), 1);

        deleteButton.parentNode.remove();
    })

    newTitleP.textContent = title;
    newAuthorP.textContent = "By: " + author;
    newPagesNum.textContent = "Length: " + pages + " pages";
}

const dialog = document.querySelector(".newBookDialog");
const showButton = document.querySelector(".newBookDialog + .showButton");
const closeButton = document.querySelector(".newBookDialog .closeButton");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const addBook = document.querySelector("#addBook");
let newBookTitle = document.querySelector("#newBookTitle");
let newBookAuthor = document.querySelector("#newBookAuthor");
let newBookPages = document.querySelector("#newBookPages");

function submitBook(event) {
    let title = newBookTitle.value;
    let author = newBookAuthor.value;
    let pages = newBookPages.value;
    addBookToLibrary(title, author, pages);
    event.preventDefault();
    newBookTitle.value = '';
    newBookAuthor.value = '';
    newBookPages.value = '';
    dialog.close();
};

addBook.addEventListener("click", submitBook, false);