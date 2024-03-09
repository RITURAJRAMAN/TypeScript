interface MyUser {
    name: string;
    age: number;
    email: string;
    address?: string;
    phone?: number;
    func?: () => void | any;
}

let user1: MyUser = {
    name: "John",
    age: 30,
    email: "john@gmail.com"
};

let user2: MyUser = {
    name: "John2",
    age: 40,
    email: "John2@gmail.com",
    address: "USA",
};

let user3: MyUser = {
    name: "John3",
    age: 50,
    email: "John3@gmail.com",
    func: function () {
        console.log("Hello");
    }
};

console.log(user1);
console.log(user2);
console.log(user3.func());