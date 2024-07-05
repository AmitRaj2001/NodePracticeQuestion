// Read content from a file using fs module


// fs module is used to read/write files


const fs = require('fs');
const filepath = 'example.txt';

fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File Content : ' , data);
});


