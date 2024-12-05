// NOTE:
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32,
};

// ERROR: below would fail
// person = {
//   isEmployee: true
// };

// NOTE: array of object with a defined type
let people: {
  name: string;
  age: number;
}[];

let peopleAlt: typeof person[];
peopleAlt = [
  { name: 'eric', age: 43 },
  { name: 'vero', age: 36 },
];

// NOTE: Union Types
let courseUnion: string | number = 'React - The Complete Guide';
courseUnion = 12341;

// NOTE: Type Alias
type Person = {
  name: string;
  age: number;
};

let peopleAlias: Person[];

// Functions & types

function add(a: number, b: number) {
  return a + b; //NOTE: the return value type is inferred, you can see it if you hover the function name
}

// NOTE: this function returns void which only exists in conjunction with functions
function printOutput(value: any) {
  console.log(value);
}