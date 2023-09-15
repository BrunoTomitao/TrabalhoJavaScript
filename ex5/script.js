const anoAtual = new Date().getFullYear();
const idade = prompt("Digite o ano de nascimento:");

if (!isNaN(idade)) {
  const anoNascimento = parseFloat(idade);
  const idadeCalculada = anoAtual - anoNascimento;
  alert(`Sua idade é ${idadeCalculada} anos.`);
} else {
  alert("Digite um ano de nascimento válido.");
}