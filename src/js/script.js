"use strict";

document.querySelector("#btn").addEventListener("click", function () {
  let peso = parseInt(document.querySelector("#peso").value);
  let altura = parseFloat(document.querySelector("#altura").value);

  let pre = peso / (altura * altura);
  let imc = pre.toFixed(2);

  if (imc < 17) {
    document.querySelector(
      "#resultado"
    ).innerHTML = `Resultado: ${imc} <br> Você está muito abaixo do peso.`
  } else if (imc >= 17 && imc < 18.49) {
    document.querySelector(
      "#resultado"
    ).innerHTML = `Resultado: ${imc} <br> Você está abaixo do peso.`
  } else if (imc > 18.5 && imc < 24.99) {
    document.querySelector(
      "#resultado"
    ).innerHTML = `Resultado: ${imc} <br> Você está no peso normal.`
  } else if (imc > 25 && imc < 29.99) {
    document.querySelector(
      "#resultado"
    ).innerHTML = `Resultado: ${imc} <br> Você está acima do peso.`
  } else if (imc > 30 && imc < 34.99) {
    document.querySelector(
      "#resultado"
    ).innerHTML = `Resultado: ${imc} <br> Você está em Obesidade grau I.`
  } else if (imc > 35 && imc < 39.99) {
    document.querySelector(
      "#resultado"
    ).innerHTML = `Resultado: ${imc} <br> Você está em Obesidade grau II (severa).`
  } else if (imc > 40) {
    document.querySelector(
      "#resultado"
    ).innerHTML = `Resultado: ${imc} <br> Você está em Obesidade grau III (mórbida).`
  }
});
