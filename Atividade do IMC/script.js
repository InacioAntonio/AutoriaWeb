//var resultado = document.getElementById("resultado");
//var peso = document.getElementById("peso");
//var p = Number(peso.value);
//var altura = document.getElementById("altura");
//var al = Number(altura.value);
function Calcular() {
  var resultado = document.getElementById("resultado");
  var peso = document.getElementById("peso");
  var p = Number(peso.value);
  var altura = document.getElementById("altura");
  var al = Number(altura.value);
  var result = p / (al * al);
  if (result <= 18.5) {
    resultado.innerHTML = result.toFixed(2) + "abaixo do Peso Ideal";
  } else if (result >= 18.6 && result <= 24.9) {
    resultado.innerHTML = result.toFixed(2) + " Parabéns está no Peso Ideal";
  } else if (result >= 25 && result <= 29.9) {
    resultado.innerHTML = result.toFixed(2) + " Levemente acima do peso Ideal";
  } else if (result >= 30 && result <= 34.9) {
    resultado.innerHTML = result.toFixed(2) + " Obesidade Grau 1";
  } else if (result >= 35 && result <= 39.9) {
    resultado.innerHTML = result.toFixed(2) + " Obesidade Grau 2";
  } else {
    resultado.innerHTML = result.toFixed(2) + " Obesidade Grau 3";
  }
}
function clean() {
  document.getElementById("peso").innerHTML = " ";
  document.getElementById("altura").innerHTML = " ";
  document.getElementById("resultado").innerHTML = " ";
}
