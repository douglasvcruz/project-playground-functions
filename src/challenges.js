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
  return `${nomes[nomes.length - 1]}, ${nomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(quantidade) {
  let numero = quantidade[0];
  let count = 0;

  for (let i = 0; i <= quantidade.length; i += 1) {
    if (quantidade[i] > numero) {
      numero = quantidade[i];
      count = 0;
    }
    if (numero === quantidade[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizz(number, resultado) {
  if (number % 3 === 0 && number % 5 === 0) {
    resultado.push('fizzBuzz');
  } else if (number % 3 === 0) {
    resultado.push('fizz');
  } else if (number % 5 === 0) {
    resultado.push('buzz');
  } else {
    resultado.push('bug!');
  }
}

function fizzBuzz(number) {
  let resultado = [];
  for (let i = 0; i < number.length; i += 1) {
    fizz(number[i], resultado);
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
}

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
function techList(lista, nomes) {
  let obj = [];
  lista = lista.sort();

  if (lista.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < lista.length; i += 1) {
    obj.push({ tech: lista[i], name: nomes });
  }

  return obj;
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
