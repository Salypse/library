const library = document.querySelector(".library");

const myLibrary = [];

function Book(name, author, pages, genre,) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.id = crypto.randomUUID()
}

function addBookToLibrary (name, author, pages, genre) {
    let newBook = new Book(name, author, pages, genre)
    myLibrary.push(newBook)
}

function displayLibrary(books) {
    for (book in books) {
        let newBookDiv = document.createElement("div");
        newBookDiv.classList.add("book-card");

        library.appendChild(newBookDiv);
    }
}

/* Placeholder books for testing */
addBookToLibrary("Mistborn", "Brandon Sanderson", "541", "Fantasy")
addBookToLibrary("Red Rising", "Pierce Brown", "382", "Science Fiction")
addBookToLibrary("The FellowShip of the Ring", "J. R. R. Tolkien", "423", "Fantasy")

/* Shows all books on user screen */
displayLibrary(myLibrary)