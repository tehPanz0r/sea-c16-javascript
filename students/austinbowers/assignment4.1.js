<script>
var string = 'This is the string to split';

function stringDelimiter (stringToSplit, separator) {
  var a = stringToSplit;
  var b = separator;
  var word = []
  for (i = 0; i < stringToSplit.length; i++) {
    if (stringToSplit.charAt(i) != separator) {
      word = stringToSplit.push(i);
    }
  }
  console.log(word)
}
</script>