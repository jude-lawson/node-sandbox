exports.analyze = function analyze(str) {
  var characters = str.split('').filter(function(character) {
    return character !== ' ';
  });

  var counted_characters = characters.reduce(function(counts, character) {
    counts[character] ? counts[character]++ : counts[character] = 1;
    return counts;
  }, {});

  return counted_characters;
};

exports.logger = function logger(analyzedResult) {
  let output = [];

  for (var character in analyzedResult) {
    output.push(`${character}: ${analyzedResult[character]}`); 
  }

  let statement = output.join('\n');

  console.log(statement);
  return statement;
};

