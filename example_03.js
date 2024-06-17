function task(id) {
  console.log("Task " + id);
}

function longtask(id) {
  console.log("Task " + id + " started!");
  setTimeout(() => console.log("Task " + id + " Received!"), 5000);
}

task(1);
longtask(2);
task(3);
task(4);
