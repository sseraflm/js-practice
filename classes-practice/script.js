import { Book } from "./book.js";

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

// Static, Private

class BankAccount {
    static totalAccounts = 0;

    #balance;

    constructor(balance) {
        this.#balance = balance;
        BankAccount.totalAccounts++;
    }

    getBalance() {
        return this.#balance;
    }

    static create(balance) {
        return new BankAccount(balance)
    }
}