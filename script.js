let myLibrary = [];
const newButton = document.querySelector("#newButton");
const questions = document.querySelector("#questions");
const submitButton = document.querySelector("#submit");
const dialog = document.querySelector("dialog");
let title = document.querySelector("#bookTitle");
let author = document.querySelector("#bookAuthor");
let pages = document.querySelector("#pageNum");
let read = document.querySelector("#userRead");


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
    });
};

function bookDisplay() {
    for (let prop in Book) {

    }
};

const fireworks = new Book("Fireworks", "Josh Grant", 435, "No");
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 351, "Yes");
myLibrary.push(fireworks, bloodMeridian);
