//synchronoous way of doing stuff
const { readFileSync, writeFileSync, write } = require("fs"); // destructring

// const fs = require("fs"); //another way
// fs.read;

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
