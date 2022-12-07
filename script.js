const renderRegisterInterface = document.getElementById("floatRegisterCard");
function registerNewBook() {
  renderRegisterInterface.style = "display:flex;";
}
let myLibrary = [];
const book = (title, author, pages, read) => {
  return { title, author, pages, read };
};
function render() {
  let bookListElement = document.getElementById("bookList");
  bookListElement.innerHTML = " ";
  myLibrary.forEach((book) => {
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
    newLiElement.append(
      titleElement,
      autorDisplaceElement,
      autorElement,
      pagesDisplaceElement,
      pageCountElement
    );
    if (book.read) {
      newLiElement.style.borderLeft = "solid #23d5abd5 4px";
    } else {
      newLiElement.style.borderLeft = "solid #d631ffce 4px";
    }
    bookListElement.appendChild(newLiElement);
  });
}
function register() {
  let newBook = book(
    document.getElementById("bookTitle").value,
    document.getElementById("authorName").value,
    document.getElementById("amountOfPages").value,
    document.getElementById("readYes").checked
  );
  myLibrary.push(newBook);
  render();
  renderRegisterInterface.style = "display:none;";
}
