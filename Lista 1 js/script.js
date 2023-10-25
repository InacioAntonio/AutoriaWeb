let moeda;
let dolar = 5.06;
moeda = prompt("digite um valor que deseja converter");
moeda = parseFloat(moeda);

conversao = function divisao(moeda, dolar) {
  return moeda / dolar;
};
console.log(conversao(moeda, dolar));
