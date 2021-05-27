//menggunakan function declaration
const methodPerson = {
    tidur: function(hour){ 
        this.health = (this.health/4) * hour;
        this.sleepy = (this.sleepy - (this.sleepy-2)) * hour;
        this.hungry = (this.hungry/2) * hour;
        this.energy = (this.energy/4) * hour;

        console.log(`Sleepy`);
        console.log(`Health = ${this.health}`);
        console.log(`Hungry = ${this.hungry}`);
        console.log(`Sleepy = ${this.sleepy}`);
        console.log(`Energy = ${this.energy}`);
    },

    run: function(m){
        this.health = (this.health - m);
        this.hungry = (this.hungry/10) * m;
        this.sleepy = (this.sleepy - (this.sleepy-2)) * m;
        this.energy = (this.energy + (m * 2));

        console.log(`Running`);
        console.log(`Health = ${this.health}`);
        console.log(`Hungry = ${this.hungry}`);
        console.log(`Sleepy = ${this.sleepy}`);
        console.log(`Energy = ${this.energy}`);
    },

    eating: function(porsi){
        this.health = (this.health + (porsi * (this.health/(this.health/2))));
        this.hungry = (this.hungry - porsi);
        this.sleepy = (this.sleepy + (this.sleepy/porsi) + 10);
        this.energy = (this.energy + (porsi * 2));

        console.log(`Eating`);
        console.log(`Health = ${this.health}`);
        console.log(`Hungry = ${this.hungry}`);
        console.log(`Sleepy = ${this.sleepy}`);
        console.log(`Energy = ${this.energy}`);
    }
}

function Person(health, hungry, sleepy, energy){
    let result = Object.create(methodPerson);
    result.health = health;
    result.hungry = hungry;
    result.sleepy = sleepy;
    result.energy = energy;
    
    return result;
}

let jarwonozt = Person(100, 100, 100, 100);
let otherman = Person(45, 10, 90, 89);