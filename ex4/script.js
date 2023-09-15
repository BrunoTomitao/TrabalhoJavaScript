const valor1 = prompt("Digite o primeiro valor:");
const valor2 = prompt("Digite o segundo valor:");

if (!isNaN(valor1) && !isNaN(valor2)) {
  const num1 = parseFloat(valor1);
  const num2 = parseFloat(valor2);

  if (num1 > num2) {
    alert(`${num1} é maior do que ${num2}`);
  } else if (num2 > num1) {
    alert(`${num2} é maior do que ${num1}`);
  } else {
    alert("Os números são iguais");
  }
} else {
  alert("Digite valores numéricos válidos");
}