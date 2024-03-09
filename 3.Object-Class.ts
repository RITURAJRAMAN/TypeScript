class ObjectClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let obj = new ObjectClass("Rituraj", 25);
obj.show();