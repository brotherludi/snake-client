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
  if (key == 'w') {
    connection.write('Move: up');
  }
  if (key == 'd') {
    connection.write('Move: right');
  }
  if (key == 's') {
    connection.write('Move: down');
  }
  if (key == 'a') {
    connection.write('Move: left');
  }
  if (key == 'm') {
    connection.write("Say: HELLO")
  }
  if (key == '\u0003') { process.exit(); }
};


module.exports = { setupInput };

