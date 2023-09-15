const nomeAluno = prompt("Digite o nome do aluno:");
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const media = (nota1 + nota2) / 2;

if (media >= 7) {
  alert(`${nomeAluno}, sua média é ${media}. Parabéns!`);
} else {
  alert(`${nomeAluno}, sua média é ${media}. Você ficou abaixo da média.`);
}