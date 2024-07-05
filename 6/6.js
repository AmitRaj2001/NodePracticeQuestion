//Write a Node.js script that reads the content of a directory and prints the name of the files in it.


const fs = require('fs');

fs.readdir('./6', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    });
}
);