// Objek literal
// let hero = {
//     name: 'eudora',
//     energy: 88,
//     makan: function (plus){
//         this.energy = this.energy + plus;
//         console.log(`Welcome ${this.name}, to mobile legend`);
//     }
// }

// function declaration
const methodHero = {
    atack: function(plus){
        this.power += plus;
        this.hp -= plus-(plus-5);
        console.log(`Welcome ${this.name}, to mobile legend`);
        console.log(`HP = ${this.hp}`);
        console.log(`Power = ${this.power}`);
    },

    buff: function(up){
        this.power += up;
        this.hp -= up-(up-3);
        console.log(`Welcome ${this.name}, to mobile legend`);
        console.log(`HP = ${this.hp}`);
        console.log(`Power = ${this.power}`);
    },
}

function Hero(name, hp, power) {
    let mage = Object.create(methodHero);
    mage.name = name;
    mage.hp = hp;
    mage.power = power;

    return mage;
}

let eudora = Hero('eudora', 100, 70);
let parsha = Hero('Parsha', 100, 69);

//Constructure declaration
//keyword new
// function Hero(name, hp, power) {
//     this.name = name;
//     this.hp = hp;
//     this.power = power;
//     this.atack = function(plus){
//         this.power += plus;
//         this.hp -= plus-(plus-5);
//         console.log(`Welcome ${this.name}, to mobile legend`);
//         console.log(`HP = ${this.hp}`);
//         console.log(`Power = ${this.power}`);
//     }
//     this.buff = function(up){
//         this.power += up;
//         this.hp -= up-(up-3);
//         console.log(`HP = ${this.hp}`);
//     }
// }

// let eudora = new Hero('Eudora', 100, 70);