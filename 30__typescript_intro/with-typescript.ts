function addTypescript(a: number, b: number) {
  return a + b;
}

const resultTypeScript = addTypescript(2, 5);

console.log(resultTypeScript);

// console.log(addTypescript('2', '5')); //ERROR: ts will error before running the code, while we're writing code.