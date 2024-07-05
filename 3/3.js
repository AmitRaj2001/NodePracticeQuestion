//write a nodejs that writes the string "Hello, World!" to a file named "output.txt"


const fs = require("fs");

fs.writeFile('3/output.txt', 'Hello world' , (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("file is created");
});
    