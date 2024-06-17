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

function getCourses(student_id) {}

function getGrades(student_id, student_courses) {}

console.log("Listening to events!");
getId("John Doe", (student_id) => {
  console.log("John Doe ID:", student_id);
});
// const student_courses = getCourses(student_id);
// const student_grades = getGrades(student_id, student_courses);
// console.log(student_grades);
console.log("Still listening to events!");
