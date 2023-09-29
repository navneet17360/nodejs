const os = require("os"); //built in modules
//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOs);
