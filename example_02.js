function task(id) {
  console.log(`Task ${id}`);
}

function longtask(id) {
  console.log(`Task ${id} started!`);
	for(let i = 0; i < 5e9; i++) {
    // wait as we do some work!
  }
	console.log(`Task ${id} Received!`);
}

task(1);
longtask(2);
task(3);
task(4);