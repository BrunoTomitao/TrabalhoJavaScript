const operacao = prompt(
    "Digite a operação desejada: multiplicacao, divisao, subtracao ou adicao"
  );
  
  if (
    operacao === "multiplicacao" ||
    operacao === "divisao" ||
    operacao === "subtracao" ||
    operacao === "adicao"
  ) {
    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));
  
    let resultado;
  
    switch (operacao) {
      case "multiplicacao":
        resultado = valor1 * valor2;
        break;
      case "divisao":
        resultado = valor1 / valor2;
        break;
      case "subtracao":
        resultado = valor1 - valor2;
        break;
      case "adicao":
        resultado = valor1 + valor2;
        break;
    }
  
    alert(`O resultado da operação ${operacao} é ${resultado}`);
  } else {
    alert("Operação não reconhecida. Por favor, digite uma operação válida.");
  }
  