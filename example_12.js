function getId(student) {
  return new Promise((resolve, reject) => {
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
}

/** Original getCourses

function getCourses(student_id, callbackFunction) {
  console.log(`Fetching ${student_id}'s courses!`);
  let courses;
  setTimeout(() => {
    courses = ["course-1", "course-2"];
    console.log(`Received ${student_id}'s courses!`);
    callbackFunction(courses);
  }, 5000);
}

*/

/** Refactored getCourses */
function getCourses(student_id) {
  return new Promise((resolve, reject) => {
    let success, courses;
    console.log(`Fetching ${student_id}'s courses!`);
    setTimeout(() => {
      success = true;
      courses = ["course-1", "course-2"];
      console.log(`Received ${student_id}'s courses!`);
      if (success) {
        resolve(courses);
      } else {
        reject(new Error(`Unable to fetch ${student_id}'s courses`));
      }
    }, 5000);
  });
}

/** Call the promise */
console.log("Listening to events!");
getId("John Doe")
  .then((id) => {
    console.log("John Doe ID:", id);
    return getCourses(id);
  })
  .then((courses) => {
    console.log("John Doe Courses:", courses);
  })
  .catch((error) => {
    console.error(error);
  });
console.log("Still listening to events!");
