const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// titleCased = tutorials.map((item) => {
//   return item.toUpperCase;
// });
// console.log(titleCased);
function titleCased() {
  return tutorials.map((robot) => {
    return robot + " trial";
  });
}

console.log(titleCased());

// try iterating individual words in a string
const random = ["Hello there"];

function iterateString() {
  return random.map((random) => {
    for (item of random) {
      return random.split(" ");
    }
  });
}

console.log(iterateString());

// titlecase
function toTitleCase(str) {
  if (!str) {
    return "";
  }
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase().concat(word.substr(1));
    })
    .join(" ");
}

console.log(toTitleCase("this is meee"));
