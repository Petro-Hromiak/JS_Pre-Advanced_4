
// Task 1

class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary = () => this.rate * this.days
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.getSalary());

const worker1 = new Worker(`Petro`, `Petrovych`, 17, 30)
console.log(worker1.getSalary())


// Task 2

class MyString {
    reverse = (string) => string.split("").reverse().join("");
    ucFirst = (string) => string[0].toUpperCase() + string.slice(1);
    ucWords = (string) => string.split(" ").map(word => this.ucFirst(word)).join(" ")
}

let str = new MyString()
console.log(str.reverse(`arsenal`))
console.log(str.ucFirst(`arsenal arsenal`))
console.log(str.ucWords(`arsenal arsenal arsenal`))


// Task 3

class CoffeeMake {
    constructor(type, sugar = `2`) {
        this.type = type;
        this.sugar = sugar;
    }
    on() {
        console.log(`Make coffee`);
    }
    off() {
        console.log(`Coffee is ready`);
    }
}

class Droples extends CoffeeMake {
    constructor(type, sugar, price) {
        super(type, sugar);
        this.price = price;
        this.typeMachine = `Droples Coffee Machine`;
    }
    show() {
        console.log(`type:${this.type}, sugar: ${this.sugar}, price: ${this.price} ua, type of Coffee MAchine: ${this.typeMachine}`);
    }
}

class Horn extends CoffeeMake {
    constructor(type, sugar, price, milk = `no`) {
        super(type, sugar);
        this.price = price;
        this.milk = milk;
        this.typeMachine = `Horn Coffee Machine`;

    }
    show() {
        console.log(`type:${this.type}, sugar: ${this.sugar}, price: ${this.price} ua, milk: ${this.milk}, type of Coffee MAchine: ${this.typeMachine}`);
    }
}

class CoffeeMachine extends CoffeeMake {
    constructor(type, sugar, price, milk = `yes`, number = `1`) {
        super(type, sugar);
        this.price = price;
        this.typeMachine = `Coffee Machine`;
        this.milk = milk;
        this.number = number;
    }
    show() {
        console.log(`type:${this.type}, sugar: ${this.sugar}, price: ${this.price} ua, milk: ${this.milk}, number: ${this.number}, type of Coffee Machine: ${this.typeMachine}`);
    }
}

let droples = new Droples(`americano`, `3`, `10`)
droples.on()
droples.show()
droples.off()
let horn = new Horn(`espresso`, `2`, `9`, `yes`)
horn.on()
horn.show()
horn.off()
let machine = new CoffeeMachine(`doubl espresso`, `1`, `12`, `no`, `2`)
machine.on()
machine.show()
machine.off()
