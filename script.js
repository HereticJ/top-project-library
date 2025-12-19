const myLibrary = [];
const questionsForm = document.createElement("input");

newButton = document.querySelector("#newButton");
questions = document.querySelector("#questions");

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
        this.sayTitle = function() {
            console.log(this.title)
        };
}

function addBookToLibrary() {
    // take params, create a book then store it in the array.
    const form = document.querySelector("#questionForm")
}

newButton.addEventListener("click", () => {
    questions.appendChild("questions")

});

const Fireworks = new Book('Fireworks', 'Josh Grant', '14287 pages', 'no');
Fireworks.sayTitle();