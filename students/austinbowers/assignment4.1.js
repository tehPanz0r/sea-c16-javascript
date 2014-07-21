var sampleInput = 'asdf$lskd1234$asdo$$$';

function stringDelimiter (stringToSplit, separator) {
  var a = stringToSplit;
  var b = separator;
  var word = [];
  var wordConstructor = [];
  var complete = [];
  
  for (i = 0; i < a.length; i++) {
    if (a.charAt(i) != separator) {
      word.push(a.charAt(i));
    } else if (a.charAt(i) === separator) {
      wordConstructor = word.join("");
      complete.push(wordConstructor);
      while (word.length > 0) {
        word.pop();
      }
    }
  }
   complete = complete.filter(Boolean);
   console.log(complete);
   return complete;
}

run = stringDelimiter(sampleInput, "$");