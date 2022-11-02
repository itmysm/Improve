const readline = require('readline');

const rl = readline.createInterface({
  'input': process.stdin,
  'output': process.stdout 
})

let list = []

rl.question("Whats's your name?", (answer) => {
  console.log("output: ", answer);

  // rl.close();
})

rl.on('line', (input) => {
  list.push(input)
  console.log(`add ${input} to list.`);
  console.log('\n we have ' + list.length + 'value(s)');
})