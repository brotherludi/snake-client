const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541,// PORT number here,
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: BOB');
    // setTimeout(() => {
    //   conn.write("Move: up")
    // },1000)
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};
// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  console.log("key", key)
  if (key == '\u001B\u005B\u0041') {
    process.stdout.write('up');
  }
  if (key == '\u001B\u005B\u0043') {
    process.stdout.write('right');
  }
  if (key == '\u001B\u005B\u0042') {
    process.stdout.write('down');
  }
  if (key == '\u001B\u005B\u0044') {
    process.stdout.write('left');
  }
  if (key == '\u0003') { process.exit(); }
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const input = setupInput()
input.on("data", handleUserInput);
console.log("Connecting ...");
connect();

module.exports = {
  connect
};