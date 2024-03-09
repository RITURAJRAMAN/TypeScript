let users = {
    name: "John",
    age: 30,
    email: "john@gmail.com"
};
// users.name = 10; *Error*: Type '10' is not assignable to type 'string'.
console.log(users);
console.log(users.name);
console.log(users.age);
console.log(users.email);


// Custom Type Object (Interface)
interface CustomUser {
    name: string;
    age: number;
    email: string;
}

let user: CustomUser = {
    name: "John",
    age: 30,
    email: "user@gmail.com"
};
console.log(user);

// Any Type
let anyType: any = {
    name: "John",
    age: 30,
    email: "user@gmail.com"
}
console.log(anyType);
anyType.age = "Fifty";
console.log(anyType);