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
    if (book.read) {
      inputElement.checked = true;
    } else {
      inputElement.checked = false;
    }
    inputElement.id = book.id;
    inputElement.addEventListener("click", (theClick) => {
      readed(theClick);
    });
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
function readed(id) {
  const liToChange = document.getElementById(id.target.id);
  if (id.explicitOriginalTarget.checked) {
    liToChange.style.borderLeft = "solid #23d5abd5 4px";
  } else {
    liToChange.style.borderLeft = "solid #d631ffce 4px";
  }
}
function removeItem(id){
  for (let i = 0; i < myLibrary.length; i++) {
    if(myLibrary[i].id == id){
      myLibrary.splice(i, 1);
    }
  }
  render();
};
/* validation */
    
const registerFormEvent = document.getElementById("registerBookForm");

const bookTitleEvent = document.getElementById("bookTitle");
const bookTitleError = document.getElementById("bookTitleError");

const authorNameEvent = document.getElementById("authorName");
const authorNameError = document.getElementById("authorNameError");

const pageAmountEvent = document.getElementById("amountOfPages");
const amountOfPagesError = document.getElementById("amountOfPagesError");

bookTitleEvent.addEventListener("input", () => {
  let errorMsg;
  if (bookTitleEvent.validity.tooShort) {
    errorMsg = "O titulo é muito curto";
    bookTitleEvent.setCustomValidity("The title is too short");
  } else if (bookTitleEvent.validity.tooLong) {
    errorMsg = "O titulo é muito extenso";
    bookTitleEvent.setCustomValidity("The title is too long");
  } else {
    errorMsg = "Salvo!";
    bookTitleEvent.setCustomValidity("");
  }
  bookTitleError.textContent = errorMsg;
});

authorNameEvent.addEventListener("input", () => {
  let errorMsg;
  if (authorNameEvent.validity.tooShort) {
    errorMsg = "O nome do autor é muito pequeno";
    authorNameEvent.setCustomValidity("Author name is too short");
  } else if (authorNameEvent.validity.tooLong) {
    errorMsg = "O nome do autor é muito extenso";
    authorNameEvent.setCustomValidity("Author name is too long");
  } else {
    errorMsg = "Salvo!";
    authorNameEvent.setCustomValidity("");
  }
  authorNameError.textContent = errorMsg;
});

pageAmountEvent.addEventListener("input", () => {
  let errorMsg;

  if (pageAmountEvent.validity.rangeUnderflow) {
    errorMsg = "A quantidade de paginas insulficiente";
    pageAmountEvent.setCustomValidity("The page amount is to short");
  } else if (pageAmountEvent.validity.rangeOverflow) {
    errorMsg = "A quantidade de paginas esta muito alta";
    pageAmountEvent.setCustomValidity("The page amount is to long");
  } else {
    errorMsg = "Salvo!";
    pageAmountEvent.setCustomValidity("");
  }
  if (isNaN(parseInt(pageAmountEvent.value))) {
    errorMsg = "Informação invalida";
  }
  amountOfPagesError.textContent = errorMsg;
});

registerFormEvent.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
});