// __tests__/quote.test.js
const { getQuote } = require('../index'); // Adjust this path based on where your function is

test('should return a non-empty quote', () => {
  const quote = getQuote(); // Call the function that generates a quote
  expect(quote).toBeDefined(); // Test if a quote is returned
  expect(quote).not.toBe(''); // Test if the quote is not an empty string
});

