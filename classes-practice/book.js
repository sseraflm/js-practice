class Book {

    constructor(title, releaseYear, price) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.price = price;
        this.isRead = false;
    }

    getBookInformation() {
        return `Book title: ${this.title}, Book release year: ${this.releaseYear}`;
    }

    readTheBook() {
        this.isRead = true;
    }

    get title() {
        return this._title;
    
    }

    get discountPrice() {
        return this.price * 0.80;
    }

    set title(value) {
        if (value.length < 1) {
            console.log("The title cannot be empty.")
            return
        }
        this._title = value;
    }

}


export  {Book}