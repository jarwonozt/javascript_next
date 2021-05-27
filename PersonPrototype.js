//menggunakan prototype javascript
function Person(nama, energy) {
    this.nama = nama;
    this.energy = energy;
}

Person.prototype.eat = function(porsi) {
    this.energy += porsi;
    return `Selamat makan ${this.nama}, energi kamu bertambah menjadi ${this.energy}`;
}

//atau bisa menggunakan class
class Animal {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;
    }

    eat(porsi) {
        this.energy += porsi;
        return `Hello ${this.nama}, menambah energi menjadi ${this.energy}`;
    }
}

let jarwonozt = new Person('jarwonozt', 90);
let kuda = new Person('kuda', 10);