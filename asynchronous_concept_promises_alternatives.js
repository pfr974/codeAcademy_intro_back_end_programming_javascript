// Creating a new Promise with an artificial delay using setTimeout.
// See https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
const testLuck = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) { 
      resolve('Lucky winner!');
    } else {
      reject(new Error('Unlucky!'));
    }
  }, 5000);  // 5000 milliseconds delay, that is 5 seconds
});

console.log('Checking your luck...');  // Log immediately

testLuck.then(message => {
  console.log(message);  // Log the resolved promise output after 5 seconds
}).catch(error => {
  console.error(error);  // Log the rejected promise output after 5 seconds
});

console.log('Waiting for the result...');  // Log immediately as well