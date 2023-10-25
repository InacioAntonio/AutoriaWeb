let altura = prompt("Digite a sua altura em metros  ");
altura = parseFloat(altura);
let peso = prompt("Digite o seu peso  ");
peso = parseFloat(peso);
let imc = peso / (altura * altura);
if (imc < 18.5) {
  alert("Abaixo do peso normal");
} else {
  if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal");
  } else {
    if (imc >= 25 && imc <= 29.9) {
      alert("Excesso de Peso");
    } else {
      if (imc >= 30 && imc <= 34.9) {
        alert("Obesidade CLasse 1");
      } else {
        if (imc >= 35 && imc <= 39.9) {
          alert("Obesidade classe 2");
        } else {
          alert("Obesidade classe 3");
        }
      }
    }
  }
}
x = prompt("Digite um numero inteiro ");
y = prompt("Digite um numero inteiro positivo");
z = prompt("Digite um numero inteiro positivo");
x = parseInt(x);
y = parseInt(y);
z = parseInt(z);
op1 = Math.cbrt(x * y * z);
op2 = (x + 2 * y + 3 * z) / 6;
op3 = (x + y + z) / 3;
alert(op1);
alert(op2);
alert(op3);
C = 1.5;
Z = 1.1;
cont = 0;
do {
  C = +2;
  Z += 3;
  cont++;
} while (C == Z);
alert(cont);
for (let i = 0; i <= 500; i++) {
  console.log(i);
  alert(i);
}
let soma = 0;
for (let i = 11; i < 20; i++) {
  if (i % 2 == 0) {
    soma += i;
  }
}
alert(soma);
