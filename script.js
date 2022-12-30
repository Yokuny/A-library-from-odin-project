/* book object */
const book = (title, author, pages, read) => {
  return { title, author, pages, read };
};
/* book array */
const myLibrary = [];

const floatingForm = document.getElementById("floatRegisterCard");
const openForm = document.getElementById("openForm");
const registerBookForm = document.getElementById("registerBookForm");
/* events to listen */
openForm.addEventListener("click", () => {
  floatingForm.style = "display:flex;";
});

registerBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBook = book(
    document.getElementById("bookTitle").value,
    document.getElementById("authorName").value,
    document.getElementById("amountOfPages").value,
    document.getElementById("readYes").checked
  );
  myLibrary.push(newBook);
  render();
  floatingForm.style = "display:none;";
});

function render() {
  const bookListElement = document.getElementById("bookList");
  bookListElement.innerHTML = " ";
  myLibrary.forEach((book) => {
    const titleElement = document.createElement("h4");
    titleElement.textContent = `${book.title}`;
    const autorElement = document.createElement("p");
    autorElement.textContent = " Autor:";
    const autorName = document.createElement("h4");
    autorName.textContent = `${book.author}`;
    const pagesElement = document.createElement("p");
    pagesElement.textContent = " paginas:";
    const pageCount = document.createElement("h4");
    pageCount.textContent = `${book.pages}`;

    const liElement = document.createElement("li");
    liElement.append(titleElement, autorElement, autorName, pagesElement, pageCount);

    if (book.read) {
      liElement.style.borderLeft = "solid #23d5abd5 4px";
    } else {
      liElement.style.borderLeft = "solid #d631ffce 4px";
    }
    bookListElement.appendChild(liElement);
  });
}
