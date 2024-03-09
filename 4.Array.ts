// Empty Array
let data = [];
console.log(data);
data = [1, 2, 3];
console.log(data);


// Specify the data type of the array
let datax: number[] = [1, 2, 3];
console.log(datax);

let datay: string[] = ['A', 'B', 'C'];
console.log(datay);

let dataz: any[] = [1, 'A', {id: 1, name: 'A'}, [1, 2, 3], function () {
    return 'A';
}];
console.log(dataz);


// Add an element to the end of the array
data.push(6);
console.log(data);


// Add an element to the beginning of the array
data.unshift(0);
console.log(data);


// Add an element to given index of the array and shift the rest of the elements
data.splice(3, 0, 4, 5);
console.log(data);


// Update an element in the array
data[3] = 4;
console.log(data);


// Access an element in the array
console.log(data[3]);


// Access the first element in the array
console.log(data[0]);


// Access the last element in the array
console.log(data[data.length - 1]);


// Access the length of the array
console.log(data.length);


// Access the index of an element in the array
console.log(data.indexOf(4));


// Remove an element from the end of the array
data.pop();
console.log(data);


// Remove an element from the beginning of the array
data.shift();
console.log(data);


// Remove an element from the middle of the array
data.splice(1, 2);
console.log(data);


// Add an element to the middle of the array
data.splice(1, 0, 2, 3);
console.log(data);


// Remove an element from the middle of the array and add an element to the middle of the array
data.splice(1, 2, 4, 5);
console.log(data);


// Remove all elements from the array
data.splice(0, data.length);
console.log(data);


// Array of strings
let data1 = ['A', 'B', 'C', 'D', 'E'];
console.log(data1);


// Array of numbers
let data2 = [1, 2, 3, 4, 5];
console.log(data2);


// Array of mixed data types
let data3 = [1, 'A', 2, 'B', 3, 'C'];
console.log(data3);


// Array of objects
let data4 = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}];
console.log(data4);


// Array of arrays
let data5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(data5);


// Array of functions
let data6 = [function () {
    return 'A';
}, function () {
    return 'B';
}, function () {
    return 'C';
}];
console.log(data6);


// Array of any data type
let data7 = [1, 'A', {id: 1, name: 'A'}, [1, 2, 3], function () {
    return 'A';
}];
console.log(data7);


// Array of generic number data type
let data8: Array<number> = [1, 2, 3, 4, 5];
console.log(data8);


// Array of generic string data type
let data9: Array<string> = ['A', 'B', 'C', 'D', 'E'];
console.log(data9);


// Array of generic any data type
let data10: Array<any> = [1, 'A', {id: 1, name: 'A'}, [1, 2, 3], function () {
    return 'A';
}];
console.log(data10);


// Array of generic mixed data type
let data11: Array<number | string> = [1, 'A', 2, 'B', 3, 'C'];
console.log(data11);


// Array of generic data type
let data12: Array<number | string | any> = [1, 'A', {id: 1, name: 'A'}, [1, 2, 3], function () {
    return 'A';
}];
console.log(data12);


// Array of generic data type
let data13: Array<number | string | any> = [1, 'A', 2, 'B', 3, 'C', {id: 1, name: 'A'}, [1, 2, 3], function () {
    return 'A';
}];
console.log(data13);


// Array of generic data type
let data14: Array<number | string | any> = [1, 'A', 2, 'B', 3, 'C', {id: 1, name: 'A'}, [1, 2, 3], function () {
    return 'A';
}, 4, 'D', 5, 'E'];
console.log(data14);


// Array of generic data type
let data15: Array<number | string | any> = [1, 'A', 2, 'B', 3, 'C', {id: 1, name: 'A'}, [1, 2, 3], function () {
    return 'A';
}, 4, 'D', 5, 'E', {id: 2, name: 'B'}, [4, 5, 6], function () {
    return 'B';
}];
console.log(data15);


// Array of generic data type
let data16: Array<number | string | any> = [1, 'A', 2, 'B', 3, 'C', {id: 1, name: 'A'}, [1, 2, 3], function () {
    return 'A';
}, 4, 'D', 5, 'E', {id: 2, name: 'B'}, [4, 5, 6], function () {
    return 'B';
}, 7, 'F', 8, 'G', 9, 'H'];
console.log(data16);


// Array of generic data type
let data17: Array<number | string | any> = [1, 'A', 2, 'B', 3, 'C', {id: 1, name: 'A'}, [1, 2, 3], function () {
    return 'A';
}, 4, 'D', 5, 'E', {id: 2, name: 'B'}, [4, 5, 6], function () {
    return 'B';
}, 7, 'F', 8, 'G', 9, 'H', {id: 3, name: 'C'}, [7, 8, 9], function () {
    return 'C';
}];
console.log(data17);


// Concatenate two arrays
let datam = [1, 2, 3];
let datan = [4, 5, 6];
let datamn = datam.concat(datan);
console.log(datamn);


// Slice an array
let datas = datamn.slice(1, 4);
console.log(datas);


// Reverse an array
let datar = datamn.reverse();
console.log(datar);


// Sort an array
let datasort = datamn.sort();
console.log(datasort);


// Iterate an array
datamn.forEach(function (value, index, array) {
    console.log(value);
});


// Iterate an array
for (let i = 0; i < datamn.length; i++) {
    console.log(datamn[i]);
}


// Iterate an array
for (let value of datamn) {
    console.log(value);
}


// Iterate an array
for (let index in datamn) {
    console.log(datamn[index]);
}


// Iterate an array
datamn.map(function (value, index, array) {
    console.log(value);
});


// Iterate an array
datamn.filter(function (value, index, array) {
    console.log(value);
});


// Iterate an array
datamn.reduce(function (previousValue, currentValue, currentIndex, array) {
    console.log(previousValue);
    console.log(currentValue);
    return previousValue + currentValue;
});


// Iterate an array
datamn.reduceRight(function (previousValue, currentValue, currentIndex, array) {
    console.log(previousValue);
    console.log(currentValue);
    return previousValue + currentValue;
});


// Iterate an array
datamn.every(function (value, index, array) {
    console.log(value);
});


// Iterate an array
datamn.some(function (value, index, array) {
    console.log(value);
});


// Copy an array
let datacopy = datamn.slice();
console.log(datacopy);