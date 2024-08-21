let apiQuotes = {};

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes.results[Math.floor(Math.random() * apiQuotes.count)]
    console.log(quote.content)
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://api.quotable.io/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();