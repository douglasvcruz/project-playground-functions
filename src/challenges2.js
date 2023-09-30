// Desafio 11
function manyFor(numbers) {
  for (let number of numbers) {
    if (
      number < 0 || number > 9 || numbers.filter((x) => x === number).length > 2
    ) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const testFor = manyFor(numbers);
  if (testFor) return testFor;

  let xPhone = '(xx) xxxxx-xxxx';
  for (let number of numbers) {
    xPhone = xPhone.replace('x', number);
  }
  return xPhone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(numbers) {
  let quantities = numbers.match(/\d+/g);
  let sum = 0;

  for (let quantity of quantities) {
    sum += Number(quantity);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

console.log(hydrate('4 caipirinhas e 2 cervejas'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
