let myLibrary = ["title", "author", "pages", "read"];

const newButton = document.querySelector("#newButton");
const questions = document.querySelector("#questions");
const submitButton = document.querySelector("#submit");
const dialog = document.querySelector("dialog");
const libraryDisplay = document.querySelector(".libraryDisplay")
const fireworks = new Book("Fireworks", "Josh Grant", 435, "No");
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 351, "Yes");

let displayBook = document.querySelector("#displayBook");
let title = document.querySelector("#bookTitle");
let author = document.querySelector("#bookAuthor");
let pages = document.querySelector("#pageNum");
let read = document.querySelector("#userRead");
let newBook = document.createElement("div");

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    /*
        this.sayTitle = function() {
            console.log(`${this.title} added.`);
        }
    */
};

function addBookToLibrary() {
    dialog.showModal();
    // take params, create a book then store it in the array.
    submitButton.addEventListener('click', () => {
        let userBook = `${title.value}`.crypto.randomUUID() = new Book(`${title.value}`, 
            `${author.value}`,`${pages.value}`, `${read.value}`);
            myLibrary.push(userBook);
            console.log(userBook);
    });
};



//newBook not a node?



function bookDisplay(array) {
    for (i = 0; i < array.length; i++) {
        let title = `${array[i].title}`;
        let author = `${array[i].author}`;
        let pages = `${array[i].pages}`;
        let read = `${array[i].read}`;
        
        libraryDisplay.appendChild("newBook");
        newBook.textContent = `${title}`, `${author}`, `${pages}`, `${read}`;
    }
};

bookDisplay(myLibrary);
myLibrary.push(fireworks, bloodMeridian);
console.log(myLibrary);

