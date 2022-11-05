class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }

    printName() {
        console.log(this.firstName);
    }
}

const brian = new Person("Brian");
brian.printName(); // ?
