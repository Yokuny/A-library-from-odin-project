const renderRegisterInterface = document.getElementById("floatRegisterCard");

function registerNewBook(){
    renderRegisterInterface.style = "display:flex;"
}

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function register(){
    let bookListElement = document.getElementById("bookList");
    bookListElement.innerHTML = " ";
    let bookTitleElement = document.getElementById("bookTitle").value;
    let authorNameElement = document.getElementById("authorName").value;
    let amountOfPagesElement = document.getElementById("amountOfPages").value;
    let alreadReadElement = document.getElementById("readYes").checked;
    let newBook = new Book(bookTitleElement, authorNameElement, amountOfPagesElement, alreadReadElement);
    myLibrary.push(newBook);
    myLibrary.forEach(book => {
        let newLiElement = document.createElement("li");
        let titleElement = document.createElement("h4");
        titleElement.textContent = `${book.title}`;
        let autorDisplaceElement = document.createElement("p");
        autorDisplaceElement.textContent = " Autor:";
        let autorElement = document.createElement("h4");
        autorElement.textContent = `${book.author}`;
        let pagesDisplaceElement = document.createElement("p");
        pagesDisplaceElement.textContent = " paginas:";
        let pageCountElement = document.createElement("h4");
        pageCountElement.textContent = `${book.pages}`;

        newLiElement.append(titleElement, autorDisplaceElement, autorElement, pagesDisplaceElement, pageCountElement);
        if(book.read){
            newLiElement.style.borderLeft = 'solid #23d5abd5 4px';
        }else{
            newLiElement.style.borderLeft = 'solid #d631ffce 4px';
        }
        bookListElement.appendChild(newLiElement);
        console.log(newLiElement);
    });


    renderRegisterInterface.style = "display:none;"
}