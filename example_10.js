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

function getGrades(student_id, student_courses, callbackFunction) {
  console.log(`Fetching ${student_id}'s grades!`);
  let grades;
  setTimeout(() => {
    grades = student_courses.map(course => {
      return { course: course, grade: Math.floor(Math.random() * 100) };
    });
    console.log(`Received ${student_id}'s grades!`);
    callbackFunction(grades);
  }, 5000);
}

console.log("Listening to events!");
getId("John Doe", (id) => {
  console.log("John Doe ID:", id);
  getCourses(id, (courses) => {
		console.log("John Doe Courses:", courses);
    getGrades(id, courses, (grades) => {
      console.log("John Doe Grades:", grades);
    });
	});
});
console.log("Still listening to events!");
