const contact = {
    name: "sserafim",
    phone: "123456789",
    email: "ThisIsAnEmail@gmail.com",
    age: 2222,
};

console.log(contact.name);

console.log(contact["phone"]);

function changeUser(contact) {
    contact.name = "ssera";
}

changeUser(contact);

function addFavorite(contact) {
    contact.isFavorite = true;
}

addFavorite(contact);

delete contact.age;

console.log("email" in contact);
