# Essential and basic JavaScript concepts

## Arrow Expressions

In `arrow_expressions_demo.js`, I first define an **anonymous** arrow function. When using an arrow expression, we do not use the function declaration. To define an arrow expression we simply use: `() => { }`. We can pass arguments to an arrow expression between the parenthesis `(())`.

Following the Code Academy lecture, we could simply write:

```javascript
console.log(() => console.log('Hello, I am an anonymous arrow expression function!'));
```

However, running this code via something like `node arrow_expressions_demo.js` would not print anything to the console. Instead, we would get:

```sh
[Function (anonymous)]
```

 This is a bit confusing at first because we are so used to see examples giving "Hello World!" printed to the console within the first minute of learning about a language.

To actually see this output, we need to invoke the function. We achieve this with:

```javascript
// We define AND invoke an anonymous arrow expression function
(()  => console.log('Hello, I am an anonymous arrow expression function!'))();
```

giving us:

```sh
Hello, I am an anonymous arrow expression function!
```
After this first example, I define a **named** arrow function `namedArrowFunction`:

```javascript
const namedArrowFunction = (name) => {
  console.log(`Hello, my name is ${name}! I am not an anonymous function anymore.`)
};
```

and we invoke it with:
```javascript
namedArrowFunction('Anon');
```

giving us:
```sh
Hello, my name is Anon! I am not an anonymous function anymore.
```

Please note that the use of backticks allows for embedded expressions, i.e. `${name}`. This replaces ``${name}`` with the value of the variable `name` that is passed to the `namedArrowFunction` function. This is a feature of the ES6 version mentioned in the lecture.

## Asynchronous Concept

### Promises

To illustrate the concept of asynchronous code in the context of Javascript, the lecture decides to introduce us to **Promises**. 

As the name hints at, a promise is an outcome that is not "available" yet, a placeholder. It is the output of an asynchronous operation:

```javascript
// We create a new promise object and assign it to the testLuck variable.
const testLuck = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) { 
    resolve('Lucky winner!')
  } else {
    reject(new Error('Unlucky!'))
  }
});

testLuck.then(message => {
  console.log(message) // Log the resolved value of the Promise
}).catch(error => {
  console.error(error) // Log the rejected error of the Promise
});
```

A `Promise` can have three different outcomes:
- **pending**, the result is undefined and the expression is waiting for a result;
- **fulfilled**, the promise has been completed successfully and returned a value;
- **rejected**, the promise has been completed unsuccessfully and returned an error object as a result.

In the example provided, a new `Promise` object is created and stored into a `testLuck` constant. It takes a function with two arguments, `resolve` and `reject`. The promise is fulfilled or rejected based on a random generated number being smaller than 0.5 or not. 

The bit after the `testLuck` constant declaration is a chain of two methods, `then` and `catch`. The `then` method is called when the promise is fulfilled, and the `catch` method is called when the promise is rejected.

In the case of a fullfilled promise, the output is:

```sh 
Lucky winner!
```

and in the case of a rejected promise, the output is:

```sh
Error: Unlucky!
    at /Users/pfr974/code/personal/codeAcademy_intro_back_end_programming_javascript/asynchronous_concept_promises.js:6:12
    at new Promise (<anonymous>)
    at Object.<anonymous> (/Users/pfr974/code/personal/codeAcademy_intro_back_end_programming_javascript/asynchronous_concept_promises.js:2:18)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
```

I think we should note that this is an abstraction of the concept of asynchronous code and `Promise`. As far as I understand, the code here appears to be executed synchronously due to its relative simplicity. I think we could try to adapt this example by introducing an artifical delay in an alternative version defined in a separate file, e.g. `asynchronous_concept_promises_alternative.js`. 
