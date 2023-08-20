const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Helper function to retrieve
function toTitleCase(string) {
  return string.replace(string[0], string[0].toUpperCase());
}

// Helper function to retrieve first word in the string.
function getFirstWord(string) {
  let spaceIndex = string.indexOf(" ");
  return (spaceIndex >= 0) ? string.substring(0, spaceIndex + 1) : string;
}

// Helper function to capitalize the first letter of each word in the string - most time complexity efficient solution.
function titleCaseString(string) {
  let str = string;
  let title = "";
  while (str.length > 0) {
    let word = toTitleCase(getFirstWord(str));
    title += word;
    str = str.substring(word.length);
  }
  return title;
}

// Test 1 - Solution 1
const titleCasedX = () => tutorials.map(function (tutorial) {
  let str = tutorial;
  let title = "";
  while (str.length > 0) {
    let word = toTitleCase(getFirstWord(str));
    title += word;
    str = str.substring(word.length);
  }
  return title;
});

// Solution 2
const titleCased = () => tutorials.map(tutorial => titleCaseString(tutorial));

