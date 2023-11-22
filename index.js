console.clear();
// prompts the user for input
let input = prompt("Enter the sentence having a lot o in it", "ex:cool");
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

// invoking getLetterFrequency()
let result = getLetterFrequency(input);
console.log(result);
alert(result);
