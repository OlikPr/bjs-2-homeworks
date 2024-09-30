class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
}
  fix(){
    this.state =  this.state * 1.5;
    return this.state;
}
  set state(count) {
    this._state = count;
    if (this.state < 0) {
      this._state = 0;
    } else if (this.state > 100) {
      this._state = 100;
    } else {
        this._state = this.state;
    }
}
  get state() {
    return this._state;
}
}


class Magazine extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
      super(name,releaseDate,pagesCount);
      this.type = "magazine";  
    }
}
class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}  
class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
        this.author = author;
    }
}  
class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
        this.author = author;
    }
}  
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
        this.author = author;
    }
}  



class Library{
    constructor(name,books){
        this.name = name;
        this.books = [];
}


addBook(book){
  if (book.state > 30){
    this.books.push(book);
  }
}

findBookBy(type, value){
    return this.books.find(book => book[type] == value) || null;
}

giveBookByName(bookName){
    let book = this.findBookBy(bookName);
  if (book) {
    this.books.splice(this.books.indexOf(book), 1);
  }
  return book;
}
}
