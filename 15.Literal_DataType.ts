let data: "abc";
data = "abc"; // OK
console.log(data); // abc
// data = "def"; // Error (Literal Data Type)

let data1: 123;
data1 = 123; // OK
console.log(data1); // 123
// data1 = 456; // Error (Literal Data Type)

let data2: "abc" | 123;
data2 = "abc"; // OK
data2 = 123; // OK
console.log(data2); // abc
// data2 = "def"; // Error (Literal Data Type)

