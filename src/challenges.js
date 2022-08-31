// Desafio 1
function compareTrue(um, dois) {
  return um && dois;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(texto) {
  return texto.split(' ');
}

// Desafio 4
function concatName(nomes) {
  return nomes[nomes.length - 1] + (', ' + nomes[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(quantidade) {
  let numero = quantidade[0];
  let count = 0;

  for (let i in quantidade) {
    if (quantidade[i] > numero) {
      numero = quantidade[i];
    }
  }
  for (let i in quantidade) {
    if (quantidade[i] === numero) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    return 'cat1';
  } {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(number) {
  let resultado = [];
  for (let i in number) {
    if (number[i] % 3 === 0 && number[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (number[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (number[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
// Desafio 9
function encode(palavra) {

  let palavraEncode = '';
  palavraEncode = palavra.replace(/a/g, 1);
  palavraEncode = palavraEncode.replace(/e/g, 2);
  palavraEncode = palavraEncode.replace(/i/g, 3);
  palavraEncode = palavraEncode.replace(/o/g, 4);
  palavraEncode = palavraEncode.replace(/u/g, 5);

  return palavraEncode;
};
function decode(palavra2) {
  
  let palavraDecode = '';

  palavraDecode = palavra2.replace(/1/g, 'a');
  palavraDecode = palavraDecode.replace(/2/g, 'e');
  palavraDecode = palavraDecode.replace(/3/g, 'i');
  palavraDecode = palavraDecode.replace(/4/g, 'o');
  palavraDecode = palavraDecode.replace(/5/g, 'u');

  return palavraDecode;
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
