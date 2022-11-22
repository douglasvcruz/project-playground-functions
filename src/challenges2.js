// Desafio 11
function manyFor(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (
      numbers[i] < 0 || numbers[i] > 9 || numbers.filter((x) => x === numbers[i]).length > 2
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
  for (let i = 0; i < numbers.length; i += 1) {
    xPhone = xPhone.replace('x', numbers[i]);
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
function hydrate(numeros) {
  let quantidade = numeros.match(/\d+/g);
  let soma = 0;

  quantidade.forEach((element) => {
    soma += parseInt(element, 10);
  });
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

console.log(hydrate('4 caipirinhas e 2 cervejas'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
