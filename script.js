const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
}

const library = document.querySelector("library");

newButton.addEventListener("click", () => {

});

function addFn() {
    // take params, create a book then store it in the array.
}

const Fireworks = new Book('Fireworks', 'Josh Grant', '14287 pages', 'no')
