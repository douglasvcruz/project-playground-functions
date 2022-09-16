// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
  for (let i = 0; i < quantidade.length; i += 1) {
    soma += parseInt(quantidade[i], 10);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
