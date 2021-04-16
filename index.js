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

// //anonymous function to return mapping of tutorials
// const titleCased = function(){
//   return tutorials.map(splitRejoin);
// }

// //function to split phrase into array and then rejoin after capitalizing 
// function splitRejoin(phrase) {

//   let words = phrase.split(' ');
//   words = words.map(capitalize);
//   words = words.join(' ');

//   return words;
// }

//function to capitalize words
function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const titleCased = () => {

  return tutorials.map(phrase => {
    let words = phrase.split(' ');
    words = words.map(capitalize);
    words = words.join(' ');

    return words;
  });

}