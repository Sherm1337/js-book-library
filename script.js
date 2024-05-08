const myLibrary = [];

class book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = `${myLibrary.length}`;
        myLibrary.push(this);
    }

    addBook() {
        const bookshelf = document.querySelector(".bookshelf");

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

        const readButton = document.createElement("button");
        newBookDiv.appendChild(readButton);
        readButton.setAttribute("id", "readButton");
        readButton.textContent = "Unread";

        readButton.addEventListener("click", () => {
            if (readButton.textContent === "Unread") {
                readButton.textContent = "Read";
            } else if (readButton.textContent === "Read") {
                readButton.textContent = "Unread";
            }
        });

        newTitleP.textContent = this.title;
        newAuthorP.textContent = "By: " + this.author;
        newPagesNum.textContent = "Length: " + this.pages + " pages";

    }
}

const theHobbit = new book("The Hobbit", "J.R.R Tolkien", 500);
theHobbit.addBook();

const bible = new book("The Bible", "Big Guy Upstairs", "A lot of");
bible.addBook();


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
    let newBook = new book(title, author, pages);
    newBook.addBook();
    event.preventDefault();
    newBookTitle.value = '';
    newBookAuthor.value = '';
    newBookPages.value = '';
    dialog.close();
};

addBook.addEventListener("click", submitBook, false);