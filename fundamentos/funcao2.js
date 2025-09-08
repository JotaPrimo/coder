const somar = function (a, b) {
  const soma = a + b;
  console.log(`Soma = : ${soma}`);
};

const arrowSoma = (a, b) => {
  return a + b;
};

// retorno implicito, como só tem uma linha a ser feita, pode ser feita assim
const subtracao = (a, b) => a - b 

console.log(subtracao(2, 3));
