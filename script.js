const library = document.querySelector(".library");
const addBookButton = document.querySelector(".add-book");
const submitBook = document.querySelector(".submit-book");
const submitBookButton = document.querySelector("#submit-book-button");

/* New book form data */
const book_title = document.querySelector("#book_title");
const book_author = document.querySelector("#book_author");
const book_pages = document.querySelector("#book_pages");
const book_genre = document.querySelector("#book_genre");
const read_book = document.querySelector("#read_book");

class Book {
    constructor(title, author, pages, genre, readStatus) {
        this.name = title;
        this.author = author;
        this.pages = pages;
        this.genre = this.formatGenre(genre);
        this.readStatus = readStatus === true ? "Read" : "Not Read";
        this.id = crypto.randomUUID()
    }

    updateReadStatus() {
        return this.readStatus = this.readStatus === "Read" ? "Not Read" : "Read";
    }

    formatGenre(genre) {
        if (genre.includes("_")) {
            genre = genre.split("_").join(" ");
        }
        return genre.charAt(0).toUpperCase() + genre.slice(1);
}
}

class Library {
    constructor() {
        this.library = [];
    }

    displayLibrary() {
        library.style.display = "grid"
        library.innerHTML = "";

        this.library.forEach(book => {
            let newBookDiv = document.createElement("div");
            newBookDiv.classList.add("book-card");

            let fullHtml = `
                <h1>${book.name}</h1>
                <p class="book-author">By: ${book.author}</p>
                <div class="book-info">
                    <p>Page Count: ${book.pages}</p>
                    <p>Genre: ${book.genre}</p>
                </div>
                <div class="book-buttons">
                    <button class="read-status">${book.readStatus}</button> 
                    <button class="remove-book">Remove Book</button>  
                </div>
            `
            newBookDiv.innerHTML = fullHtml;

            /* Change read status button for each book */
            let readStatusButton = newBookDiv.querySelector(".read-status");
            readStatusButton.addEventListener("click", () => {
                readStatusButton.textContent = book.updateReadStatus()
            })

            let removeBookButton = newBookDiv.querySelector(".remove-book");
            removeBookButton.addEventListener("click", () => {
                this.removeBookFromLibrary(book.id)
            })

            library.appendChild(newBookDiv);
        });
    }
    addBookToLibrary (title, author, pages, genre, readStatus) {
        let newBook = new Book(title, author, pages, genre, readStatus)
        this.library.push(newBook)
    }

    removeBookFromLibrary(id) {
        this.library = this.library.filter(book => book.id !== id)
        this.displayLibrary()
    }
}

const newLibrary = new Library()
newLibrary.displayLibrary()

/* Shows the submit book ui when clicked */
addBookButton.addEventListener("click", () => {
    book_title.value = "";
    book_author.value = "";
    book_pages.value = "";
    book_genre.selectedIndex = 0;
    read_book.checked = false;

    submitBook.style.display = "block";
    library.style.display = "none";
});

/* When add book form submitted display library with new book */
submitBook.addEventListener("submit", function(event) {
    event.preventDefault();

    let title = book_title.value;
    let author = book_author.value;
    let page_count = book_pages.value;
    let genre = book_genre.value;
    let read_status = (read_book.checked) ? true : false

    newLibrary.addBookToLibrary(title, author, page_count, genre, read_status);
    submitBook.style.display = "none";
    newLibrary.displayLibrary()
})