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

const book = new Book("Witcher", 1993);
console.log(book.title, book.releaseYear)

// Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    showAnimal() {
        console.log(`the animal name is ${this.name}`)
    }
}

class Fox extends Animal {
    constructor(name, species) {
        super(name);
        this.species = species;
    }
    showAnimal() {
    super.showAnimal();
    console.log(`The animal species is: ${this.species}`);

    }
}

const fox = new Fox("Yuki", "Arctic Fox");

fox.showAnimal();