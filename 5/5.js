// Command line arguments write a nodejs script that takes a name as command line argument and prints "Hello, <name>!" to the console

const args = process.argv.slice(2);

const name = args[0] || 'world';

console.log(`Hello, ${name}!`);