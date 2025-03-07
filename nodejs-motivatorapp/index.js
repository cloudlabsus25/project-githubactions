#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
//import axios from "axios";

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Opportunities don’t happen. You create them. – Chris Grosser",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer"
];

// Function to get a random quote
function getRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(chalk.green.bold("\n✨ Motivational Quote ✨\n"));
  console.log(chalk.blue(quote), "\n");
}

// CLI setup
program
  .version("1.0.0")
  .description("A CLI tool to print a random motivational quote")
  .action(getRandomQuote);

program.parse(process.argv);

