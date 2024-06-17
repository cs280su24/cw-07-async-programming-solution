function getId(student) {
  console.log(`Fetching ${student} info!`);

  // read from database!
  let id;
  setTimeout(() => {
    id = "jdoe23";
    console.log(`Received ${student} info!`);
  }, 5000);

  return id; // <- why is this undefined?
}

function getCourses(student_id) {}

function getGrades(student_id, student_courses) {}

console.log("Listening to events!");
const student_id = getId("John Doe");
console.log("John Doe ID:", student_id);
// const student_courses = getCourses(student_id);
// const student_grades = getGrades(student_id, student_courses);
// console.log(student_grades);
console.log("Still listening to events!");
