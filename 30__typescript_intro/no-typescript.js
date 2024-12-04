function add(a, b) {
  return a + b;
}

const result = add(2, 5);

console.log(result);
console.log(add('2', '5')); //NOTE: it will concatenate and not add, if strings are passed