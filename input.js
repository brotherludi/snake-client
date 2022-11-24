let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};
// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  console.log("key", key)
  if (key == '\u001B\u005B\u0041') {
    connection.write('Move: up');
  }
  if (key == '\u001B\u005B\u0043') {
    connection.write('Move: right');
  }
  if (key == '\u001B\u005B\u0042') {
    connection.write('Move: down');
  }
  if (key == '\u001B\u005B\u0044') {
    connection.write('Move: left');
  }
  if (key == 'm') {
    connection.write("Say: HELLO")
  }
  if (key == '\u0003') { process.exit(); }
};


module.exports = { setupInput };

