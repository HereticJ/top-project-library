// Array of book objects.
const myLibrary = [];

// DOM element select declarations.
const newButton = document.querySelector("#newButton");
const questions = document.querySelector("#questions");
const submitButton = document.querySelector("#submit");
const dialog = document.querySelector("dialog");
const libraryDisplay = document.querySelector(".libraryDisplay")
let form = document.forms[0];
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
    submitButton.addEventListener('click', () => {
        for (let i = 0; i < form.length; i++) {
            text += form.elements[i].value + "<br>";
            let userBook = new Book(uuid, form.elements[i].value)
                console.log(userBook)
        }}
    )};
            
        /*
        let form = document.getElementById("#questionForm");
        let title = document.getElementById("#title").elements[1];
        let author = document.getElementById("#bookAuthor").elements[2];
        let pages = document.getElementById("#pageNum").elements[3];
        let read = document.getElementById("#userRead").elements[4];
        let userBook = new Book(crypto.randomUUID(), title, 
            author, pages, read);
            userBook
            myLibrary.push(userBook);
            // Reset form values to defaults.
            function resetElements() {
                title = '';
                author = '';
                pages = '';
                read = '';
            };
            function resetForm() {
                form.resetElements()
            };
            form.resetForm();

    });
};
*/


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
