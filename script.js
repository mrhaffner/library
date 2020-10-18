let myLibrary = [];

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
    readBtn.value = 'Finished';
    addReadToggle()
    addDelete()
}

let emptyAlert = document.getElementById('empty_alert');
let numberAlert = document.getElementById('number_alert');

const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    if ((title === "") || (author === "") || (pages === "")) {
        numberAlert.style.opacity = '0%';
        emptyAlert.style.opacity = '100%';
    } else if (pages < 1 ||  RegExp(/\D/).test(pages)) {
        emptyAlert.style.opacity = '0%';
        numberAlert.style.opacity = '100%';
    } else {
        addBookToLibrary()
        numberAlert.style.opacity = '0%';
        emptyAlert.style.opacity = '0%';
    }
})

const bookContainer = document.getElementById('book_container')

function displayBooks() {
    htmlElements = "";
    myLibrary.forEach((book) => {
        htmlElements +=         
            `<div class="card" id="${myLibrary.indexOf(book)}">
                <div class="card_card">
                    <input type='button' class='read' value='${book.read}'></input>
                    <button class='delete'>X</button>
                    <div class='card_text'>
                        <p id="book_title_text">${book.title}</p>
                        <p>${book.author}</p>
                        <p id="page_count">${book.pages}</p>
                    </div> 
                </div>
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
        if (button.value === 'Finished') {
            button.value = 'Reading';
            updateReadStatus(button)
        } else {
            button.value = 'Finished';
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
    button.parentElement.parentElement.remove()
    myLibrary.splice(button.parentElement.parentElement.id, 1)
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
