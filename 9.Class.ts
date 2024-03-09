class myclass {
    name: string;
    age: number;

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let obj = new myclass();
obj.name = "Rituraj";
obj.age = 25;
obj.display(); // Name: Rituraj, Age: 25


class myclass2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let obj2 = new myclass2("Rituraj", 25);

obj2.display(); // Name: Rituraj, Age: 25
console.log(obj2.name); // Rituraj
console.log(obj2.age); // 25
obj2.name = "Rituraj Singh";
obj2.age = 26;
obj2.display(); // Name: Rituraj Singh, Age: 26
console.log(obj2.name); // Rituraj Singh
console.log(obj2.age); // 26
