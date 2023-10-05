const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("request event");
//   res.end("Hello World");
// });

// server.listen(5000, () => {
//   console.log("Server listening on port : 5000....");
// });

//using event emitter api
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Welcome");
});
server.listen(5000);
