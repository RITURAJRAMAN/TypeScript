function calc() {
    console.log('This is a function calc with no return type');
    return 10 + 10;
}

console.log(calc());


function calc2(): number {
    console.log('This is a function calc2 with return type number');
    return 10 + 10 + 30;
}

console.log(calc2());

function calc3(a: number, b: number): number {
    console.log('This is a function calc3 with return type number and two parameters');
    return a + b;
}

console.log(calc3(20, 20));