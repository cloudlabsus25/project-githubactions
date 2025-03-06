// index.js
function getQuote() {
  const quotes = [
    'Success is the sum of small efforts repeated day in and day out.',
    'Stay positive, work hard, make it happen!',
    'Believe you can and you’re halfway there.'
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

module.exports = { getQuote }; // Export the function for testing

