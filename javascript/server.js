let cars = {
  marque: 'Bmw'
};

let users = {
  name: 'Bernard',
    __proto__: cars
};

let toto = {
    email: 'fr@fr.fr',
    __proto__: users
};


console.log(users.marque);
console.log(users.email);
