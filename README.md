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

