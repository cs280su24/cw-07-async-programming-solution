// Note to myself: I was trying to arrive the implementation of Promises in JavaScript
// However, I was not able to complete the implementation in _example_12.js (following
// this one). So, I decided to skip to Promises in example_11.js directly.

/** Original code 

function getId(student, callbackFunction) {
  console.log(`Fetching ${student} info!`);
  // read from database!
  let id;
  setTimeout(() => {
    id = "jdoe23";
    console.log(`Received ${student} info!`);
    callbackFunction(id);
  }, 5000);
}

console.log("Listening to events!");
getId("John Doe", (id) => {
  console.log("John Doe ID:", id);
});
console.log("Still listening to events!");

*/

function getId(student) {
  let id;
  let callbackFunction;

  console.log(`Fetching ${student} info!`);

  setTimeout(() => {
    id = "jdoe23";
    console.log(`Received ${student} info!`);
    if (callbackFunction) {
      callbackFunction(id);
    }
  }, 5000);

  return {
    // We can rename the callback function to something more meaningful
    // like `onIdReceived` or `onIdReady`, or more generally `onDataReady` or `then`
    callback: (cb) => {
      callbackFunction = cb;
    },
  };
}

console.log("Listening to events!");
getId("John Doe").callback((id) => {
  console.log("John Doe ID:", id);
});
console.log("Still listening to events!");

/*

In this implementation:

1. The `callback` method stores the passed callback function (`cb`) in the
   `callbackFunction` variable.
2. When the `setTimeout` completes, it checks if `callbackFunction` is defined
   and then calls it with the `id`.
3. The `getId` function returns an object with the `callback` method, allowing
   chaining.

This setup ensures that the callback function is properly called with the `id`
once the asynchronous operation (simulated by `setTimeout`) is completed.

 */
