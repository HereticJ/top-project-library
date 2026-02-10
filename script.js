// Array of book objects.
let myLibrary = [];

// DOM element select declarations.
let questions = document.querySelector("#questionForm");
let readYes = document.querySelector("#readYes");
let readNo = document.querySelector("#readNo");
let libraryDisplay = document.querySelector(".libraryDisplay");
const newButton = document.querySelector("#newButton");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel");
const dialog = document.querySelector("dialog");

// Creates unique IDs for Book objects.
//let id = crypto.randomUUID();


// Cancel modal.
cancelButton.addEventListener("click", cancelClick)
    function cancelClick(event) {
        dialog.close();
    };

function Identifier(id) {
    this.id = id;
};

Identifier.prototype.assignId = function() {
    this.id = `${crypto.randomUUID()}`;
};

// Book object constructor.
function Book(id, title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
        this.id = id,
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
};

Object.setPrototypeOf(Book.prototype, Identifier.prototype);

// Example books.
const fireworks = new Book(`${crypto.randomUUID()}`, "Fireworks", "Josh Grant", 
    435, "No");
const bloodMeridian = new Book(`${crypto.randomUUID()}`, "Blood Meridian", 
    "Cormac McCarthy", 351, "Yes");
const clockers = new Book(`${crypto.randomUUID()}`, "Clockers", "Richard Price", 
    732, "Yes");

myLibrary.push(fireworks, bloodMeridian, clockers);

// Library array function for adding books.
function addBookToLibrary() {
    dialog.showModal();

// take params, create a book then store it in the array.
submitButton.addEventListener('click', submitClick);
    function submitClick(event) {
        event.preventDefault();
        let questions = document.querySelector("#questionForm");
            // Evaluates whether 'Read' radio button is yes or no.
            if (readYes.checked == true) {
                questions.elements[3].value = "Yes"
            } else {
                questions.elements[3].value = "No"
            };
            // Takes form info and creates a new book object from its data.
            let userBook = new Book(`${crypto.randomUUID()}`, 
                questions.elements[0].value, questions.elements[1].value, 
                questions.elements[2].value, questions.elements[3].value);
        dialog.close();
        myLibrary.push(userBook);
    bookDisplay(myLibrary);
    }
};

// Visual book display.
function bookDisplay(array) {
    // Reset libraryDisplay before every loop to prevent repeated cards.
    libraryDisplay.textContent = ``;

    for (i = 0; i < array.length; i++) {
        let addBook = document.createElement("div")
        addBook.classList.add("libraryBooks")

        // Create remove button.
        let removeButton = document.createElement("button");

        // Create remove button image.
        let iconShow = document.createElement("img");
        iconShow.src='book-remove.svg';

            // DOM create element declarations.
            let bookId = document.createElement("div");
            let bookTitle = document.createElement("h3");
            let bookAuthor = document.createElement("h5");
            let bookPages = document.createElement("p");
            let bookRead = document.createElement("p");

            // Add class names for each created element.
            bookId.classList.add("bookId");
            bookTitle.classList.add("bookTitle");
            bookAuthor.classList.add("bookAuthor");
            bookPages.classList.add("bookPages");
            bookRead.classList.add("bookRead");
            removeButton.classList.add("removeButton");
            
            // Assigns text for book details to each book card.
            bookId.textContent = array[i].id;
            bookTitle.textContent = array[i].title;
            bookAuthor.textContent = array[i].author;
            bookPages.textContent = array[i].pages + " Pages";
            bookRead.textContent = "Read? " + array[i].read;

            // Assigns text content to book cards.
            addBook.appendChild(bookId);
            addBook.appendChild(bookTitle);
            addBook.appendChild(bookAuthor);
            addBook.appendChild(bookPages);
            addBook.appendChild(bookRead);
            addBook.appendChild(removeButton);

            // Add book to library display.
            libraryDisplay.appendChild(addBook);

            // Show remove icon when mouse hovers over remove button.
            removeButton.addEventListener('mouseenter', showIcon)
                function showIcon() {
                    removeButton.appendChild(iconShow) == true;
                };

            // Hide remove icon when mouse hovers outside button area.
            removeButton.addEventListener('mouseleave', hideIcon)
                function hideIcon() {
                    removeButton.removeChild(iconShow) == false;
                };

            // Remove books from Array and Card display.
                // Click event for removing books from LIbrary Display.
                removeButton.addEventListener('click', removeBook)
                    function removeBook() {
                        libraryDisplay.removeChild(addBook);
                        let updatedArray = array.splice(i, 1);
                        array = updatedArray
                        }
                    
    }
};

bookDisplay(myLibrary);
console.log(myLibrary);
