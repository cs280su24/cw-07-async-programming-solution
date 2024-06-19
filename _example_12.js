// Note to myself: I was trying to arrive the implementation of Promises in JavaScript
// However, I was not able to complete the implementation following _example_11.js here.
// So, I decided to skip to Promises in example_11.js directly.

// The issues is that I can't use my returned callback function to chain the next function call.
// To make that work, I would need a complex implementation like this:
//
// return {
//   callback: function (cb) {
//     callbackFunction = cb;
//     return {
//       then: function (nextFunction) {
//         callbackFunction = (id) => {
//           cb(id);
//           nextFunction(id);
//         };
//         return this;
//       },
//     };
//   },
// };

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
    callback: (cb) => {
      callbackFunction = cb;
      return this; // Return this for chaining
    },
  };
}

function getCourses(student_id) {
  let courses;
  let callbackFunction;

  console.log(`Fetching ${student_id}'s courses!`);

  setTimeout(() => {
    courses = ["course-1", "course-2"];
    console.log(`Received ${student_id}'s courses!`);
    if (callbackFunction) {
      callbackFunction(courses);
    }
  }, 5000);

  return {
    callback: (cb) => {
      callbackFunction = cb;
      return this; // Return this for chaining
    },
  };
}

console.log("Listening to events!");
getId("John Doe")
  .callback((id) => {
    console.log("John Doe ID:", id);
    return getCourses(id);
  })
  .callback((courses) => {
    // This fails!
    console.log("John Doe Courses:", courses);
  });
console.log("Still listening to events!");
