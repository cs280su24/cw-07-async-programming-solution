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

/** Return a promise

function getId(student) {
  
  const promise = new Promise();

  return promise;
}

*/

/** Promise constructor

function getId(student) {
  
  const promise = new Promise((resolve, reject) => {

  });

  return promise;
}

*/

/** Resolve and Reject 

function getId(student) {
  
  const promise = new Promise((resolve, reject) => {
    let success;
    // do async work

    if (success) {
      resolve();
    } else {
      reject();
    }
  });

  return promise;
}

*/

/** Resolve with data and Reject with error

function getId(student) {
  
  const promise = new Promise((resolve, reject) => {
    let success, id;
    // do async work
    console.log(`Fetching ${student} info!`);

    if (success) {
      console.log(`Received ${student} info!`);
      resolve(id);
    } else {
      reject(new Error(`Unable to fetch ${student} info`));
    }
  });

  return promise;
}

*/

/** Simulate async work 

function getId(student) {
  
  const promise = new Promise((resolve, reject) => {
    let success, id;
    console.log(`Fetching ${student} info!`);
    setTimeout(() => {
      id = "jdoe23";
      success = true;
      if (success) {
        console.log(`Received ${student} info!`);
        resolve(id);
      } else {
        reject(new Error(`Unable to fetch ${student} info`));
      }
    }, 5000);
  });

  return promise;
}

*/

/** Refactored code */
function getId(student) {
  return new Promise((resolve, reject) => {
    let success, id;
    console.log(`Fetching ${student} info!`);
    setTimeout(() => {
      id = "jdoe23";
      success = false;
      if (success) {
        console.log(`Received ${student} info!`);
        resolve(id);
      } else {
        reject(new Error(`Unable to fetch ${student} info`));
      }
    }, 5000);
  });
}

/** Call the promise */
console.log("Listening to events!");
getId("John Doe")
  .then((id) => {
    console.log("John Doe ID:", id);
  })
  .catch((error) => {
    console.error(error);
  });
console.log("Still listening to events!");

// Run the code once again and update `success` to `false` to see the error message.
