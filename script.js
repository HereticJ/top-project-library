// Array of book objects.
let myLibrary = new Array;
console.log(Array.isArray(myLibrary));

// DOM element select declarations.
let questions = document.querySelector("#questionForm");
let readYes = document.querySelector("#readYes");
let readNo = document.querySelector("#readNo");
let libraryDisplay = document.querySelector(".libraryDisplay");
let card = document.querySelector("#book-card")
const newButton = document.querySelector("#newButton");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel");
const dialog = document.querySelector("dialog");

// Cancel modal.
cancelButton.addEventListener("click", cancelClick)
    function cancelClick(event) {
        dialog.close();
    };

// Generates IDs for each book.
function generateUUID() {
    id = crypto.randomUUID()
    return id;
};

// Book object constructor.
function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read,
        this.id = generateUUID(id)
};

// Writes Book object IDs to console.
Book.prototype.showId = function() {
    console.log(`${this.id}`)
    return `${this.id}`
};

// Example books.
const fireworks = new Book("Fireworks", "Josh Grant", 435, "No");
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 351, "Yes");
const clockers = new Book("Clockers", "Richard Price", 732, "Yes");
const it = new Book("It", "Stephen King", 6666, "No")

myLibrary.push(fireworks, bloodMeridian, clockers, it);

fireworks.showId();

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
            let userBook = new Book(questions.elements[0].value, questions.elements[1].value, 
                questions.elements[2].value, questions.elements[3].value, 
                `${generateUUID()}`);
        dialog.close();
        myLibrary.push(userBook);
    bookDisplay(myLibrary);
    }
};

// Visual book display.f
function bookDisplay(array) {

    // Resets libraryDisplay before every loop to prevent repeated cards.
    libraryDisplay.textContent = ``;

    // Loops through myLibrary array to assign data to cards.
    for (i = 0; i < myLibrary.length; i++) {
        const addBookCard = document.createElement("card" + i)
        addBookCard.classList.add("libraryBooks")

        // Create remove button image.
        let iconShow = document.createElement("img");
        iconShow.src='book-remove.svg';
        
        // Makes one card's contents per book.
        let bookTitle = document.createElement("h3");
        let bookAuthor = document.createElement("h5");
        let bookPages = document.createElement("p");
        let bookRead = document.createElement("p");
        let bookId = document.createElement("card.data-set.uuid");
        let removeButton = document.createElement("button");


        // Add class names for each created element.
        bookTitle.classList.add("bookTitle");
        bookAuthor.classList.add("bookAuthor");
        bookPages.classList.add("bookPages");
        bookRead.classList.add("bookRead");
        bookId.classList.add("bookId")
        removeButton.classList.add("removeButton");

      
        // Assigns book contents to cards.
        addBookCard.appendChild(bookTitle)
        addBookCard.appendChild(bookAuthor)
        addBookCard.appendChild(bookPages)
        addBookCard.appendChild(bookRead)
        addBookCard.appendChild(bookId)
        addBookCard.appendChild(removeButton)


        // Assigns text for book details to each book card.        
        bookTitle.textContent = array[i].title
        bookAuthor.textContent = array[i].author
        bookPages.textContent = array[i].pages + " Pages"
        bookRead.textContent = "Read? " + array[i].read
        bookId.textContent = array[i].id
        console.log(myLibrary[i].id)

        // Add book to library display.
        libraryDisplay.appendChild(addBookCard)

        // Shows remove icon when mouse hovers over remove button.
        removeButton.addEventListener('mouseenter', showIcon)
            function showIcon() {
                removeButton.appendChild(iconShow) == true
            }

        // Hides remove icon when mouse hovers outside button area.
        removeButton.addEventListener('mouseleave', hideIcon)
            function hideIcon() {
                removeButton.removeChild(iconShow) == false
            }

        // Returns bookId when remove button is clicked.
        removeButton.addEventListener('click', removeCard) 
            function removeCard() {
                libraryDisplay.removeChild(addBook)
            }
    }
};    

bookDisplay(myLibrary);
console.log(Array.isArray(myLibrary));
console.log(myLibrary);
