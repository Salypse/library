const library = document.querySelector(".library");

const myLibrary = [];

function Book(name, author, pages, genre, readStatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID()
}

function addBookToLibrary (name, author, pages, genre, readStatus) {
    let newBook = new Book(name, author, pages, genre, readStatus)
    myLibrary.push(newBook)
}

function displayLibrary(books) {
    books.forEach(book => {
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
        library.appendChild(newBookDiv);
    });
}

/* Placeholder books for testing */
addBookToLibrary("Mistborn", "Brandon Sanderson", "541", "Fantasy", "Read")
addBookToLibrary("Red Rising", "Pierce Brown", "382", "Science Fiction", "Read")
addBookToLibrary("The FellowShip of the Ring", "J. R. R. Tolkien", "423", "Fantasy", "Not Read")

/* Shows all books on user screen */
/* displayLibrary(myLibrary) */