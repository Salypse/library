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