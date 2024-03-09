// Generic is a feature in TypeScript which allows us to define a class,
// interface or method with a placeholder. This placeholder can be replaced
// with any data type at the time of use.
function users<T>(data: T): T {
    return data;
}

let output = users<string>("Hello");
console.log(output);

let output1 = users("Hello!");
console.log(output1);

let output2 = users<number>(10);
console.log(output2);

let output3 = users({name: "John", age: 30});
console.log(output3);

// Generics with Array
function usersArray<T>(data: T[]): T[] {
    return data;
}

let output4 = usersArray<string>(["Hello", "World"]);
console.log(output4);

let output5 = usersArray<number>([10, 20, 30]);
console.log(output5);

let output6 = usersArray([{name: "John", age: 30}, {name: "Doe", age: 40}]);
console.log(output6);