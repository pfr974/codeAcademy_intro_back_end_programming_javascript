# Essential and basic JavaScript concepts

## Arrow Expressions

In `arrow_expreesions_demo.js`, I first define an anonymous arrow function. Following the codeacademy lecture, we could simply write:

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
