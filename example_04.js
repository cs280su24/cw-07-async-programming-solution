function getId(student) {

}

function getCourses(student_id) {

}

function getGrades(student_id, student_courses) {

}


console.log("Listening to events!");
const student_id = getId("John Doe");
const student_courses = getCourses(student_id);
const student_grades = getGrades(student_id, student_courses);
console.log(student_grades);
console.log("Still listening to events!");