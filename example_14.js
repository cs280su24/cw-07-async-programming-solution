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

function getCourses(student_id) {
  return new Promise((resolve, reject) => {
    let success, courses;
    console.log(`Fetching ${student_id}'s courses!`);
    setTimeout(() => {
      success = true;
      courses = ["course-1", "course-2"];
      console.log(`Received ${student_id}'s courses!`);
      if (success) {
        resolve({ student_id, courses }); // Updated to return student_id too!
      } else {
        reject(new Error(`Unable to fetch ${student_id}'s courses`));
      }
    }, 5000);
  });
}

function getGrades(student_id, student_courses) {
  return new Promise((resolve, reject) => {
    let success, grades;
    console.log(`Fetching ${student_id}'s grades!`);
    setTimeout(() => {
      success = true;
      grades = student_courses.map((course) => {
        return { course: course, grade: Math.floor(Math.random() * 100) };
      });
      console.log(`Received ${student_id}'s grades!`);
      if (success) {
        resolve(grades);
      } else {
        reject(new Error(`Unable to fetch ${student_id}'s grades`));
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
  .then(({ id, courses }) => {
    // Updated arguments to destructure the object returned by getCourses
    console.log("John Doe Courses:", courses);
    return getGrades(id, courses); // Now the id is available to pass to getGrades
  })
  .then((grades) => {
    console.log("John Doe Grades:", grades);
  })
  .catch((error) => {
    console.error(error);
  });
console.log("Still listening to events!");
