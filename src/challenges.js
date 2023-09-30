// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(names) {
  // return `${names[names.length - 1]}, ${names[0]}`;
  return `${names.pop()}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(quantities) {
  let number = quantities[0];
  let count = 0;

  for (let quantity of quantities) {
    if (quantity > number) {
      number = quantity;
      count = 0;
    }
    if (number === quantity) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const catOne = Math.abs(cat1 - mouse);
  const catTwo = Math.abs(cat2 - mouse);
  if (catTwo < catOne) {
    return 'cat2';
  }
  if (catTwo > catOne) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizz(number) {
  if (number % 15 === 0) {
    return 'fizzBuzz';
  } if (number % 3 === 0) {
    return 'fizz';
  } if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let resultado = [];
  for (let number of numbers) {
    resultado.push(fizz(number));
  }
  return resultado;
}

// Desafio 9
function encode(word) {
  return word.replace(/[aeiou]/g, (letter) => 'aeiou'.indexOf(letter) + 1);
  // return palavra
  //   .replace(/a/g, 1)
  //   .replace(/e/g, 2)
  //   .replace(/i/g, 3)
  //   .replace(/o/g, 4)
  //   .replace(/u/g, 5);
}

function decode(word) {
  return word.replace(/[1-5]/g, (number) => 'aeiou'[number - 1]);
  // .replace(/1/g, 'a')
  // .replace(/2/g, 'e')
  // .replace(/3/g, 'i')
  // .replace(/4/g, 'o')
  // .replace(/5/g, 'u');
}

// Desafio 10
function techList(list, name) {
  if (list.length === 0) return 'Vazio!';

  list.sort();
  let newTechList = [];
  for (let tech of list) {
    newTechList.push({ tech, name });
  }
  return newTechList;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
