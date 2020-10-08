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
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    myLibrary.push(new Book(title, author, pages, read))
    document.getElementById('book_form').reset()
    displayBooks()
    readBtn.value = 'Finished Reading';
    addReadToggle()
    addDelete()
}

const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', () => addBookToLibrary())

const bookContainer = document.getElementById('book-container')

function displayBooks() {
    htmlElements = "";
    myLibrary.forEach((book) => {
        htmlElements +=         
            `<div class="card" id="${myLibrary.indexOf(book)}">
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <input type='button' class='read' value='${book.read}'></input>
            <button class='delete'>Delete</button>
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
            updateReadStatus(button)
        } else {
            button.value = 'Finished Reading';
            updateReadStatus(button)
        };
    })

}

function updateReadStatus(button) {
    if (button.closest('.card') !== null) {
        myLibrary[button.parentElement.id].read = button.value
    }
}

function deleteBook(button) {
    button.parentElement.remove()
    myLibrary.splice(button.parentElement.id, 1)
    displayBooks()
    addReadToggle()
    addDelete()
}

function addDelete() {
    let deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((button) => {
        button.addEventListener('click', () => deleteBook(button))
    });
}

function openForm() {
    document.getElementById("form_container").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("form_container").style.display = "none";
  }

const formBtn = document.getElementById('form_open_btn');
formBtn.addEventListener('click', () => {
    if (formBtn.value === 'New Book') {
        openForm()
        formBtn.value = 'Close';
    } else {
        closeForm()
        formBtn.value = 'New Book';
    }
})

//Remove this once fully operational, just for testing - also delete your test book objects
displayBooks()
addReadToggle()
addDelete()

//add a way to verify input