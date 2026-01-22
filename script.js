// Array of book objects.
let myLibrary = [];

// DOM element select declarations.
let questions = document.querySelector("#questionForm");
const newButton = document.querySelector("#newButton");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel");
const dialog = document.querySelector("dialog");
const libraryDisplay = document.querySelector(".libraryDisplay");


// Cancel modal.
cancelButton.addEventListener("click", cancelClick)
    function cancelClick(event) {
        dialog.close();
    };

// UUID variable declaration
let uuid = crypto.randonUUID;

// Example books.
const fireworks = new Book(crypto.randomUUID(), "Fireworks", "Josh Grant", 
    435, "No");
const bloodMeridian = new Book(crypto.randomUUID(), "Blood Meridian", 
    "Cormac McCarthy", 351, "Yes");
const clockers = new Book(crypto.randomUUID(), "Clockers", "Richard Price", 
    732, "Yes");

myLibrary.push(fireworks, bloodMeridian, clockers);

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
};

// Library array function for adding books.
function addBookToLibrary() {
    dialog.showModal();

    // take params, create a book then store it in the array.
    submitButton.addEventListener('click', submitClick);
        function submitClick(event) {
            event.preventDefault();
            let questions = document.querySelector("#questionForm");
                let userBook = new Book(crypto.randomUUID(), 
                questions.elements[0].value, questions.elements[1].value, 
                questions.elements[2].value, questions.elements[3].value);
        dialog.close();
        myLibrary = [];
        myLibrary.push(userBook);
        bookDisplay(myLibrary);
    }};

// Visual book display.
function bookDisplay(array) {
    for (i = 0; i < array.length; i++) {
        myLibrary = [];
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
