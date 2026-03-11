// Array of book objects.
const myLibrary = [];

// DOM element select declarations.
const questions = document.querySelector("#questionForm");
const libraryDisplay = document.querySelector("#libraryDisplay");
const newButton = document.querySelector("#newButton");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel");
const dialog = document.querySelector("dialog");

// Cancel modal.
cancelButton.addEventListener("click", cancelClick)
    function cancelClick() {
        dialog.close();
    };

// Generates IDs for each book.
function generateUUID() {
    const id = `${ crypto.randomUUID() }`;
    return id;
};

// Book object constructor.
function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error(
            "You must use the 'new' operator to call the constructor")
    }
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read,
        this.id = generateUUID(id)
};

// Example books.
const fireworks = new Book("Fireworks", "Josh Grant", 435, false);
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 
    351, true);
const clockers = new Book("Clockers", "Richard Price", 732, true);
const it = new Book("It", "Stephen King", 6666, false)

myLibrary.push(fireworks, bloodMeridian, clockers, it);

// Library array function for adding books.
function addBookToLibrary() {
    dialog.showModal();

// take params, create a book then store it in the array.
submitButton.addEventListener('click', submitClick);
    function submitClick(event) {
        event.preventDefault();
        let questions = document.querySelector("#questionForm");

            // Takes form info and creates a new book object from its data.
            let userBook = new Book(questions.elements[0].value, 
                questions.elements[1].value, questions.elements[2].value, 
                questions.elements[3].value, 
                `${generateUUID()}`);

        dialog.close();
        myLibrary.push(userBook);
    deleteChildren();
    bookDisplay(myLibrary);
    }
};

// Visual book display.f
function bookDisplay(array) {

    // Loops through myLibrary array to assign data to cards.
    for (i = 0; i < array.length; i++) {

        // Initializes cards and sets data attribute with ID.
        const card = document.createElement("div");
        const addId = document.createAttribute("data-id");
        card.setAttributeNode(addId);

        // Create remove button image.
        const removeIcon = document.createElement("img");
        const checkIcon = document.createElement("img");
        removeIcon.src='book-remove.svg';
        checkIcon.src='check.svg';

        // Initializes remove and read buttons.
        const removeButton = document.createElement("button");
        const checkButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        checkButton.classList.add("checkButton");

        // Makes one card's contents per book.
        const bookTitle = document.createElement("h3");
        const bookAuthor = document.createElement("h5");
        const bookPages = document.createElement("p");
        const bookRead = document.createElement("p");

        // Add class names for each created element.
        bookTitle.classList.add("bookTitle");
        bookAuthor.classList.add("bookAuthor");
        bookPages.classList.add("bookPages");
        bookRead.classList.add("bookRead");
        card.classList.add("cards")

        // Assigns book contents to cards.
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
        card.appendChild(removeButton);
        card.appendChild(checkButton);
        
        // Assigns text for book details to each book card.        
        bookTitle.textContent = array[i].title;
        bookAuthor.textContent = array[i].author;
        bookPages.textContent = array[i].pages + " Pages";
        bookRead.textContent = "Read?";
        addId.textContent = `${array[i].id}`;

        if (array[i].read === false) {
            checkButton.checked = false;
        } else {
            checkButton.checked = true;
        }

        // Add book card to library display.
        libraryDisplay.appendChild(card)

        // Shows remove icon when mouse hovers over remove button.
        removeButton.addEventListener('mouseenter', showRemoveIcon)
            function showRemoveIcon() {
                removeButton.appendChild(removeIcon) == true 
            };

        // Hides remove icon when mouse hovers outside button area.
        removeButton.addEventListener('mouseleave', hideRemoveIcon)
            function hideRemoveIcon() {
                removeButton.removeChild(removeIcon) == false
            };

        // Removes card from library display.
        removeButton.addEventListener('click', removeBook)
            function removeBook() {
                let index = myLibrary.findIndex(myLibraryBook => myLibraryBook.id 
                    == card.dataset.id);
                    myLibrary.splice(index, 1);
                    libraryDisplay.removeChild(card);
                };
        
        // Checks read status of card and shows checkbox icon when button
        // is hovered over.
        if (checkButton.checked === false) {
            // Shows check icon on mouse hover over check button.
            checkButton.addEventListener('mouseenter', showCheckIcon)
                    function showCheckIcon() {
                        checkButton.appendChild(checkIcon) === true
                    };

            // Removes check icon when mouse hovers outside check 
            // button.
            checkButton.addEventListener('mouseleave', hideCheckIcon)
                    function hideCheckIcon() {
                        checkButton.removeChild(checkIcon) === false
                    };
            
            // Toggles check icon on card and sets myLibrary array object
            // book read status to true.
            checkButton.addEventListener('click', toggleReadOn)
                function toggleReadOn() {
                    checkButton.appendChild(checkIcon)
                    myLibrary[i][read] = true;
                };

        // Toggles card and myLibrary book object read status to false when
        // clicked when read status is set to true.
        } else if (checkButton.checked === true) {
            checkButton.appendChild(checkIcon)
            checkButton.addEventListener('click', toggleReadOff)
                function toggleReadOff() {
                    checkButton.removeChild(checkIcon)
                    myLibrary[i].read = false;
            }
        }

    }
};

function deleteChildren() {
    let child = libraryDisplay.lastElementChild;
    while (child) {
        libraryDisplay.removeChild(child);
        child = libraryDisplay.lastElementChild;
    }
}

bookDisplay(myLibrary);

// git commit message: Added checkbox functionality to cards.