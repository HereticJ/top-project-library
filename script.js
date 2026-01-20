// Array of book objects.
const myLibrary = [];

// DOM element select declarations.
const newButton = document.querySelector("#newButton");
const questions = document.querySelector("#questions");
const submitButton = document.querySelector("#submit");
const dialog = document.querySelector("dialog");
const libraryDisplay = document.querySelector(".libraryDisplay");
const form = document.forms[0];
let text = "";

// UUID variable declaration
let uuid = crypto.randonUUID;

// Example books.
const fireworks = new Book(crypto.randomUUID(), "Fireworks", "Josh Grant", 
    435, "No");
const bloodMeridian = new Book(crypto.randomUUID(), "Blood Meridian", 
    "Cormac McCarthy", 351, "Yes");
const clockers = new Book(crypto.randomUUID(), "Clockers", "Richard Price", 
    732, "Yes");

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
    submitButton.addEventListener('click', submitClick);
        function submitClick(event) {
            let userTitle = document.querySelector("#bookTitle");
            let userAuthor = document.querySelector("#bookAuthor");
            let userPages = document.querySelector("#bookPages");
            let userRead = document.querySelector("#bookRead");
                userTitle.textContent += [`input#bookTitle`].value;
                let userBook = new Book(crypto.randomUUID(), userTitle, 
                `${userAuthor}`, `${userPages}`, `${userRead}`);
                    event.preventDefault();
        }};

// Visual book display.
function bookDisplay(array) {
    for (i = 0; i < array.length; i++) {
        let addBook = document.createElement("div" + [i])
        libraryDisplay.appendChild(addBook)
        addBook.classList.add("libraryBooks")
            // DOM create element declarations.
            let bookTitle = document.createElement("h3");
            let bookAuthor = document.createElement("h5");
            let bookPages = document.createElement("p");
            let bookRead = document.createElement("p");
            bookTitle.classList.add("bookTitle");
            bookAuthor.classList.add("bookAuthor");
            bookPages.classList.add("bookPages");
            bookRead.classList.add("bookRead");
                bookTitle.textContent = array[i].title
                bookAuthor.textContent = array[i].author
                bookPages.textContent = array[i].pages + " Pages"
                bookRead.textContent = "Read? " + array[i].read
                    addBook.appendChild(bookTitle)
                    addBook.appendChild(bookAuthor)
                    addBook.appendChild(bookPages)
                    addBook.appendChild(bookRead)
    }
};

bookDisplay(myLibrary);
