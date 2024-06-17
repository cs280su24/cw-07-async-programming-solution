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

function getCourses(student_id, callbackFunction) {
	console.log(`Fetching ${student_id}'s courses!`);
  let courses;
  setTimeout(() => {
    courses = ["course-1", "course-2"];
    console.log(`Received ${student_id}'s courses!`);
    callbackFunction(courses);
  }, 5000);
}

function getGrades(student_id, student_courses) {}

console.log("Listening to events!");
getId("John Doe", (id) => {
  console.log("John Doe ID:", id);
  getCourses(id, (courses) => {
		console.log("John Doe Courses:", courses);
	});
});
// const student_courses = getCourses(student_id);
// const student_grades = getGrades(student_id, student_courses);
// console.log(student_grades);
console.log("Still listening to events!");
