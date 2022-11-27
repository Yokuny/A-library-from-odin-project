function run(){
    function book(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    const clubDaLuta = new book('club da luta', 'David Finch', 300, true);
    const aMeninaQueRoubavaLivros = new book('A menina que roubava livros', 'Markus Zusak', 240, true);

    console.log(clubDaLuta);

    book.prototype.displayBookInfo = function(){
        console.log(`Titulo: ${title}, Autor: ${author}, Paginas: ${pages}, Já foi lido?: ${read}`);
    }

    console.log(clubDaLuta);
}