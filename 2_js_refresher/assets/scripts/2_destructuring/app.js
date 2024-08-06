const [name1, name2] = ['Eric', 'Estelle']
const myArray = ['el1', 'el2', 'el3']

console.log(name1, name2);
console.log(...myArray);

const {name: userName, age: userAge} = {
    name: 'Eric',
    age: 43,
}

console.log(userName, userAge);

const testUser = {
  name: 'Eric_test',
  age: 103,
};

console.log({ ...testUser });


let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

const obj = {
    el1: 'test1',
    el2: 'test2',
    el3: true,
    el4: 55,
    el5: {myObj: 'another test'}
}

const { el1, el2, ...restObject } = obj;
console.log(el1, el2, restObject);
