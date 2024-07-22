const fs = require('fs');

// to read the JSON file
fs.readFile('quotes.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }