const bookshelf = document.querySelector(".bookshelf");
const addBook = document.querySelector("#addBook");
let newBookTitle = document.querySelector("#newBookTitle");
let newBookAuthor = document.querySelector("#newBookAuthor");
let newBookPages = document.querySelector("#newBookPages");

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

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
    deleteButton.textContent = "Delete Book";

    deleteButton.addEventListener("click", () => {
        deleteButton.parentNode.remove();
    })

    newTitleP.textContent = title;
    newAuthorP.textContent = author;
    newPagesNum.textContent = pages;
}

addBook.addEventListener("click", submitBook, false);


function submitBook(event) {
    let title = newBookTitle.value;
    let author = newBookAuthor.value;
    let pages = newBookPages.value;
    addBookToLibrary(title, author, pages);
    event.preventDefault();
    newBookTitle.value = '';
    newBookAuthor.value = '';
    newBookPages.value = '';
};