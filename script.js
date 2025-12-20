const myLibrary = [];
const newButton = document.querySelector("#newButton");
const questions = document.querySelector("#questions");
const submitButton = document.querySelector("#submit");
const title = document.querySelector("#bookTitle");
const author = document.querySelector("#bookAuthor");
const pages = document.querySelector("#pageNum");
const read = document.querySelector("#userRead");

questions.style.display = 'none';

newButton.addEventListener("click", () => {
    questions.style.display = 'block';
});

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
    submitButton.addEventListener('click', () => {
        let userBook = new Book(`${title.value}`, `${author.value}`,
            `${pages.value}`, `${read.value}`);
            myLibrary += `userBook`;
    });
};



console.log(myLibrary[0]);