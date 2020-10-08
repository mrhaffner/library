// write a test book object in array
let myLibrary = [{
        title: 'Dune',
        author: 'Frank Herbert',
        pages: '400',
        read: 'Completed',
    }, 
    {
        title: 'Basic Economics',
        author: 'Thomas Sowell',
        pages: '500',
        read: 'Completed',
    },
];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    // take the user's input and store the new book objects into an array
    myLibrary.push(new Book(title, author, pages, read))
}

function displayBooks() {
    // loops through the array and displays each book on the page
    htmlElements = "";
    myLibrary.forEach((book) => {
        htmlElements +=         
            `<div class="card">
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <p>${book.read}</p>
            <button>Completed/Finished</button>
            <button>Delete</button>
            </div>`
        bookContainer.innerHTML = htmlElements;
    }); 
}

const bookContainer = document.getElementById('book-container')


//add a "NEW BOOK" button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it's been read...

//add a button on each book's diplay to remove the book from the library
    //will need to associate your DOM elements with the actual book objext in some way
        //easy solution is giving them a data-attribute that corresponds to the index of the library array

//add a button on each book's display to change it's "read" status
    //create the function that toggles a book's "read" status on your "book" prototype


