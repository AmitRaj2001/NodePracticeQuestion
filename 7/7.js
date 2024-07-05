//Simple calculator : Create a command line calculator in NodeJs that can add subtract multiply and divide two numbers passed as command line arguments


const args = process.argv.slice(2);

const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

console.log(args);

let result;

switch (operator) {
	case "+":
		result = num1 + num2;
		break;
	case "-":
		result = num1 - num2;
		break;
	case "*":
		result = num1 * num2; // node 7.js 5 \* 4 or node 7.js 5 "*" 4 u can use either of them because The issue you're facing is due to the way the shell handles the asterisk (*) character. The shell interprets the asterisk as a wildcard character and expands it to match filenames in the current directory.
		break;
	case "/":
		if (num2 === 0) {
			result = "Cannot divide by zero";
			break;
		}
		result = num1 / num2;
		break;
	default:
		result = "Invalid operator";
}

console.log(result);