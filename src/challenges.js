// Desafio 1
function compareTrue(um, dois) {
  return um && dois;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(texto) {
  return texto.split(' ')
}

// Desafio 4
function concatName(nomes) {
  return nomes.at(-1).concat(", ", nomes[0])
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1
}

// Desafio 6

function highestCount(quantidade) {
  let numero = quantidade[0]
  let count = 0

  for (let i = 0; i < quantidade.length; i += 1) {
    if (quantidade[i] > numero) {
      numero = quantidade[i]
    }
  }
  for (let i2 = 0; i2 < quantidade.length; i2 += 1) {
    if (quantidade[i2] === numero) {
      count++
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
  return 'cat2'
} else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
  return "cat1"
} else {
  return 'os gatos trombam e o rato foge'
}
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
