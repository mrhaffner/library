// write a test book object in array
let myLibrary = [{
        title: 'Dune',
        author: 'Frank Herbert',
        pages: '400',
        read: 'Finished Reading',
    }, 
    {
        title: 'Basic Economics',
        author: 'Thomas Sowell',
        pages: '500',
        read: 'Finished Reading',
    },
];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    // take the user's input and store the new book objects into an array
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    //document.getElementById('book_form').submit()
    myLibrary.push(new Book(title, author, pages, read))
    document.getElementById('book_form').reset()
    displayBooks()
    
    readBtn.value = 'Finished Reading';
    addReadToggle()
    //return false
}

const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', () => addBookToLibrary())


//optional: create a validation function

const bookContainer = document.getElementById('book-container')

function displayBooks() {
    // loops through the array and displays each book on the page
    htmlElements = "";
    myLibrary.forEach((book) => {
        htmlElements +=         
            `<div class="card" id="${myLibrary.indexOf(book)}">
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <input type='button' class='read' value='${book.read}'></input>
            <button>Delete</button>
            </div>`
        bookContainer.innerHTML = htmlElements;
    }); 
}

function addReadToggle() {
    let toggle = document.querySelectorAll('.read')
    toggle.forEach((button) => {
        clickToggleEvent(button)
    })
}

const readBtn = document.getElementById('read')
clickToggleEvent(readBtn)

function clickToggleEvent (button) {
    button.addEventListener('click', () => {
        if (button.value === 'Finished Reading') {
            button.value = 'Have Not Finished';
        } else {
            button.value = 'Finished Reading';
        };
    })
}

//if it's parent's elements class === card
    //get the id of the parent element
        //change the read status of the object in array at place = id to button.value



//function clickUpdateReadStatus (book) {
//    if (book. === 'Finished Reading') {
//        button.value = 'Have Not Finished';
//    } else {
//        button.value = 'Finished Reading';
//    };
//}

//add a "NEW BOOK" button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it's been read...
    //hidden from at the button that pops up

//add a button on each book's diplay to remove the book from the library
    //will need to associate your DOM elements with the actual book objext in some way
        //easy solution is giving them a data-attribute that corresponds to the index of the library array


//Remove this once fully operational, just for testing
displayBooks()
addReadToggle()