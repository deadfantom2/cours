let animals = {
    eats: 'animal'
};
let rabbits = {
    jumps: 'rabbit'
};
animals.__proto__ = rabbits; // (*)
// теперь мы можем найти оба свойства в rabbit:
console.log( animals.eats ); // true (**)
console.log( animals.jumps ); // true



let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

// walk взят из цепочки прототипов
longEar.walk(); // Animal walk
console.log(longEar.eats); // true (из rabbit)

/*let users = ['angular', 'vue', 'react'].filter(data => {
    return data.match('a')
});
console.log(users);

 */