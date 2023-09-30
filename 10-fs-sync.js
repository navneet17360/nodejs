//synchronoous way of doing stuff
const { readFileSync, writeFileSync, write } = require("fs"); // destructring

// const fs = require("fs"); //another way
// fs.read;
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

writeFileSync(
  "content/result-sync.txt",
  `Here is the result : ${first},${second}`,
  {
    flag: "a",
  }
);
console.log("done with this task");
console.log("starting the next one");

//in sync approach node doesnt offloads thats why its showing done with the task

//both sync and async approach can be done using promises and async and await methods
