/* book object */
const book = (title, author, pages, read, receivedId) => {
  const id = receivedId + 11;
  return { title, author, pages, read, id };
};
const myLibrary = [];
/* book array */
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
    document.getElementById("readYes").checked,
    myLibrary.length
  );
  myLibrary.push(newBook);
  render();
  floatingForm.style = "display:none;";
});
/* */
function render() {
  const bookListElement = document.getElementById("bookList");
  bookListElement.innerHTML = " ";
  myLibrary.forEach((book) => {
    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    const iconElement = document.createElement("img");
    iconElement.src = "./trash-bin-outline.svg";
    iconElement.id = book.id;
    iconElement.addEventListener("click", (theClick) => {
      removeItem(theClick.target.id);
    });
    const titleElement = document.createElement("h4");
    titleElement.textContent = `${book.title}`;
    const autorElement = document.createElement("p");
    autorElement.textContent = " Autor:";
    const autorName = document.createElement("h4");
    autorName.textContent = `${book.author}`;
    const pagesElement = document.createElement("p");
    pagesElement.textContent = " paginas:";
    const pagesCount = document.createElement("h4");
    pagesCount.textContent = `${book.pages}`;

    const liElement = document.createElement("li");
    liElement.id = book.id;
    liElement.append(
      inputElement,
      iconElement,
      titleElement,
      autorElement,
      autorName,
      pagesElement,
      pagesCount
    );

    if (book.read) {
      liElement.style.borderLeft = "solid #23d5abd5 4px";
    } else {
      liElement.style.borderLeft = "solid #d631ffce 4px";
    }
    bookListElement.appendChild(liElement);
  });
}
/* */
function removeItem(id){
  for (let i = 0; i < myLibrary.length; i++) {
    if(myLibrary[i].id == id){
      myLibrary.splice(i, 1);
    }
  }
  render();
};