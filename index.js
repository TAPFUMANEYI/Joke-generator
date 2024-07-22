const fs = require('fs');

// to read the JSON file
fs.readFile('quotes.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

      // Parse the JSON data
      const quotes = JSON.parse(data);

      // Generating a random quote
      const randomQuote = getRandomQuote(quotes);
  
      // Display the quote
      console.log(`"${randomQuote.quote}" - ${randomQuote.author}`);
  });

  // Function to get a random quote
function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}