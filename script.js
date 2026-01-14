// Array of book objects.
const myLibrary = [];

// DOM element select declarations.
const newButton = document.querySelector("#newButton");
const questions = document.querySelector("#questions");
const submitButton = document.querySelector("#submit");
const dialog = document.querySelector("dialog");
const libraryDisplay = document.querySelector(".libraryDisplay")
let title = document.querySelector("#bookTitle");
let author = document.querySelector("#bookAuthor");
let pages = document.querySelector("#pageNum");
let read = document.querySelector("#userRead");
let form = document.querySelector("#questionForm");

// UUID variable declaration
let uuid = crypto.randonUUID;

// Example books.
const fireworks = new Book(crypto.randomUUID(), "Fireworks", "Josh Grant", 
    435, "No");
const bloodMeridian = new Book(crypto.randomUUID(), "Blood Meridian", 
    "Cormac McCarthy", 351, "Yes");

// DOM create element declarations.

let bookTitle = document.createElement("h3");
let bookAuthor = document.createElement("h3");
let bookPages = document.createElement("p");
let bookRead = document.createElement("p");

// Book object constructor.
function Book(uuid, title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
        this.uuid = uuid,
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
        myLibrary.push(this)
};

// Library array function for adding books.
function addBookToLibrary() {
    dialog.showModal();
    // take params, create a book then store it in the array.
    submitButton.addEventListener('click', () => {
        let newBook = new Book(`${title}`, 
            `${author}`,`${pages}`, `${read}`);
            myLibrary.push({
                newBook
            });
    });
};

// Visual book display.
function bookDisplay(array) {
    for (i = 0; i < array.length; i++) {
        let addBook = document.createElement("div" + [i])
        libraryDisplay.appendChild(addBook)
            bookUuid = array[i].uuid
            bookTitle.textContent = array[i].title
            bookAuthor.textContent = array[i].author
            bookPages.textContent = array[i].pages
            bookRead.textContent = array[i].read
            addBook[i].appendChild(bookTitle)
            addBook[i].appendChild(bookAuthor)
            addBook[i].appendChild(bookPages)
            addBook[i].appendChild(bookRead)
    }
};

bookDisplay(myLibrary);
