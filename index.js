const fs = require('fs');
const engine = require('./engine');
const myArgs = process.argv.slice(2);

if (myArgs.length <= 0)
    return console.log("No input file recived");

fs.readFile(myArgs[0], "utf8", (err, file) => {
    if(err)
        return console.log("Error loading file... check it!");
    const shapes = file.split('\n');
    engine(shapes);
});