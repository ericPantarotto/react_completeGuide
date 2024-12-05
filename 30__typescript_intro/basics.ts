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