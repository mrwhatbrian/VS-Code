const schedule = ["Wake Up", "Eat", "Film a Video", "Watch Netflix"];
console.log(schedule); // Outputs the initial schedule: [ 'Wake Up', 'Eat', 'Film a Video', 'Watch Netflix' ]

console.log("\n-----------------------------------------------------\n");

console.log(schedule[0]); // Outputs the first item: Wake Up
console.log(schedule[1]); // Outputs the second item: Eat
console.log(schedule[3]); // Outputs the fourth item: Watch Netflix

console.log("\n-----------------------------------------------------\n");

schedule.push("New Item Added"); // Adds a new item to the end of the schedule
console.log(schedule); // Outputs the updated schedule: [ 'Wake Up', 'Eat', 'Film a Video', 'Watch Netflix', 'New Item Added' ]

console.log("\n-----------------------------------------------------\n");

schedule.pop(); // Removes the last item from the schedule
console.log(schedule); // Outputs the updated schedule: [ 'Wake Up', 'Eat', 'Film a Video', 'Watch Netflix' ]

console.log("\n-----------------------------------------------------\n");

schedule.shift(); // Removes the first item from the schedule
console.log(schedule); // Outputs the updated schedule: [ 'Eat', 'Film a Video', 'Watch Netflix' ]

console.log("\n-----------------------------------------------------\n");

schedule.unshift("Brush"); // Adds a new item at the beginning of the schedule
console.log(schedule); // Outputs the updated schedule: [ 'Brush', 'Eat', 'Film a Video', 'Watch Netflix' ]

console.log("\n-----------------------------------------------------\n");

console.log(schedule.indexOf("Eat")); // Finds the index of the item "Eat" in the schedule

console.log("\n-----------------------------------------------------\n");

const film = schedule.indexOf("Film a Video"); // Finds the index of "Film a Video"
console.log(schedule[film]); // Outputs the item at the found index: Film a Video
