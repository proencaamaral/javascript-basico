const alunos = ['Luiz', 'Maria', 'João']; //Array

alunos.push('Fabio') // adicionando aluno no final do array

alunos.unshift('Carlos')// adiciona no inicio do array, alterando o indice

const removido = alunos.pop(); // remove o ultimo elemento do array e guarda na variavel
console.log(removido) // imprime o nome removido 

delete alunos[1] /// apaga o aluno, sem mudar o indice
console.log(alunos)