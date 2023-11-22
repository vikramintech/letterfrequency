console.clear();

// getLetterFrequency functions gives the no of occurence of letter "o" in a given sentence

function getLetterFrequency(sentence) {
  let count = 0;

  sentence = sentence.toLowerCase(); // lowercasing all the letters in the sentence

  // calculates the frequency
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "o") {
      count++;
    }
  }
  return count;
}

// input will given to function as an argument
const input = "Rovor herO";

// invoking getLetterFrequency()
console.log(getLetterFrequency(input));
