let re;
// Literal Charaters
re = /hello/;
re = /hello/i;

// Metacharater Symbols
re = /^h/i; // Must Start with
re = / world$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any one character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional Character
re = /gre?a?y\?/i; // Escape Character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be an G or F
re = /[^GF]ray/i; // Match anything expect a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,}o/i; // Must occur atleast {m} amount of times

// Parentheses () - Grouping
re = /([0-9]x){3}/;

// Shorthand Character Classes
re = /\w/; // Word Character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non word Character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit zero or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non whitespace char
re = /Hell\b/i; // Word Boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if not followed by y

// String to match
const str = "Hsdaxy";

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} doesn't matches ${re.source}`);
  }
}

reTest(re, str);
