// We define AND invoke an anonymous arrow expression function
(()  => console.log('Hello, I am an anonymous arrow expression function!'))();

// We now define a constant variable that holds an anonymous arrow expression function
const namedArrowFunction = (name) => {
  console.log(`Hello, my name is ${name}! I am not an anonymous function anymore.`)
};

// We invoke the namedArrowFunction function.
namedArrowFunction('Anon');