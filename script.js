const popUpForm = document.querySelector('.new-book-form');
const newBookButton = document.querySelector('.new-book');
const cancelButton = document.querySelector('.cancel');
const booksGrid = document.querySelector('.books-grid');
const body = document.querySelector('body');
const pagemask = document.createElement('div');
var visibility = 'hidden';
var myLibrary = [];

pagemask.classList.add('page-mask');








function Books (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + " by " + author + ", " + pages + " pages, " + read + ".";
    }
}


function addBookToLibrary(title, author, pages, read) {
    const Book = new Books(title, author, pages, read);
    myLibrary.push(Book)
    return Book;

}


popUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var title = document.querySelector('#title');
    var author = document.querySelector('#author');
    var pages = document.querySelector('#pages');
    var read = document.querySelector('#read');
    var book = addBookToLibrary(title.value, author.value, pages.value, read.value);
        var card = document.createElement('div');
        card.classList.add('book-card');
        const authorText = document.createElement('p');
        authorText.innerHTML = 'Author: ' + book.author;
        const titleText = document.createElement('p');
        titleText.innerHTML = 'Title: ' + book.title;
        const pagesText = document.createElement('p');
        pagesText.innerHTML = 'Pages: ' + book.pages;
        const readButton = document.createElement('button');
        if (read.checked) {
            readButton.innerHTML = 'read'
            readButton.classList.add('read-button');
        } else {
            readButton.innerHTML = 'not read'
            readButton.classList.add('not-read-button');
        }
        readButton.addEventListener('click', function() {
            if (readButton.className === 'read-button') {
                readButton.classList.remove('read-button');
                readButton.classList.add('not-read-button');
                readButton.innerHTML = 'not read';
            } else {
                readButton.classList.remove('not-read-button');
                readButton.classList.add('read-button');
                readButton.innerHTML = 'read';
        
            }
            
        });
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'delete';
        deleteButton.addEventListener('click', function () {
            booksGrid.removeChild(card);
        });

        
        card.appendChild(authorText);
        card.appendChild(titleText);
        card.appendChild(pagesText);
        card.appendChild(readButton);
        card.appendChild(deleteButton);
        booksGrid.appendChild(card);
    });



newBookButton.addEventListener('click', function(){
        popUpForm.classList.add('form-show');
        body.appendChild(pagemask)
        
})

cancelButton.addEventListener('click', function() {
    popUpForm.classList.remove('form-show');
    body.removeChild(pagemask);
})

