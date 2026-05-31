// Lab 03: Token Counter — text processing pipeline

function cleanText(text) {
  return text.trim();
}

function splitIntoWords(text) {
  return text.split(" ");
}

function removeEmptyWords(words) {
  return words.filter(function (word) {
    return word !== "";
  });
}

function estimateTokens(words) {
  return Math.ceil(words.length * 0.75);
}

function countTokens(text) {
  const cleaned = cleanText(text);
  const words = splitIntoWords(cleaned);
  const filtered = removeEmptyWords(words);
  return estimateTokens(filtered);
}

// Bonus: character count (trimmed text length)
function characterCount(text) {
  return cleanText(text).length;
}

// Bonus: estimated USD cost from tokens and price per million
function estimateCost(tokens, pricePerMillion) {
  return (tokens / 1_000_000) * pricePerMillion;
}

// --- Verification tests (check the browser console) ---

console.log(cleanText("  Hello world  "));

console.log(splitIntoWords("The quick brown fox"));

const messy = splitIntoWords("Hello   world");
console.log(messy);
console.log(removeEmptyWords(messy));

const words = ["The", "quick", "brown", "fox"];
console.log(estimateTokens(words));

console.log(countTokens("Hello"));
console.log(countTokens("Hello, world!"));
console.log(countTokens("The quick brown fox jumps over the lazy dog"));
console.log(countTokens("  I am learning JavaScript   today  "));

// Bonus demos
console.log(characterCount("  Hello world  "));

const fiveHundredWords = Array(500).fill("word").join(" ");
const emailTokens = countTokens(fiveHundredWords);
console.log("500-word email tokens:", emailTokens);
console.log("GPT-4o input ($2.50/M):", estimateCost(emailTokens, 2.5));
console.log("Claude Sonnet input ($3.00/M):", estimateCost(emailTokens, 3));
console.log("Gemini Flash input ($0.30/M):", estimateCost(emailTokens, 0.3));
console.log("DeepSeek input ($0.28/M):", estimateCost(emailTokens, 0.28));

document.addEventListener("DOMContentLoaded", function () {
  var inputText = document.getElementById("inputText");
  if (inputText) {
    inputText.blur();
  }
});
