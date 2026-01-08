let myLibrary = [];

const newButton = document.querySelector("#newButton");
const questions = document.querySelector("#questions");
const submitButton = document.querySelector("#submit");
const dialog = document.querySelector("dialog");
const libraryDisplay = document.querySelector(".libraryDisplay")

const fireworks = new Book("Fireworks", "Josh Grant", 435, "No");
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 351, "Yes");

let title = document.querySelector("#bookTitle");
let author = document.querySelector("#bookAuthor");
let pages = document.querySelector("#pageNum");
let read = document.querySelector("#userRead");
let form = document.querySelector("#questionForm");

let newBook = document.createElement("div");

myLibrary.push({
    fireworks,
});

myLibrary.push({
    bloodMeridian
});

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary() {
    dialog.showModal();
    // take params, create a book then store it in the array.
    submitButton.addEventListener('click', () => {
        let newBook = new Book(`${title.value}`, 
            `${author.value}`,`${pages.value}`, `${read.value}`);
            myLibrary.push({
                newBook
            });
    });
};

function bookDisplay(array) {
    for (i = 0; i < array.length; i++) {
        libraryDisplay.appendChild(newBook)
            newBook.textContent = `${myLibrary[i].title}`, `${myLibrary[i].author}`, 
            `${myLibrary[i].pages}`, `${myLibrary[i].read}`;
    }
};

bookDisplay();

/*
        let title = `${array[i].title}`;
        let author = `${array[i].author}`;
        let pages = `${array[i].pages}`;
        let read = `${array[i].read}`;
        
        libraryDisplay.appendChild("displayBook");
        displayBook.textContent = `${title}`, `${author}`, `${pages}`, `${read}`;
        */