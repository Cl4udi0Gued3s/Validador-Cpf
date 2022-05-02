var cpf = ''
var lista_cpf = []
var lista2_cpf = []
var digito1 = 0
var digito2 = 0


function validaCpf() {

	//Digito 1

	var cpf = document.getElementById('cpf').value

	y = 10
	for (var x = 0; x <= 10; x++) {
		var z = (cpf[x] * y)
		lista_cpf.push(z)
		y--
	}

	lista_cpf.pop()
	lista_cpf.pop()

	var soma = lista_cpf.reduce(function(soma, i) {
		return soma + i
	})

	var conta = 11 -(soma % 11)

	if (conta > 9) {
		var digito1 = 0
	}

	else {
		var digito1 = conta
	}

	console.log(digito1)


	//Digito 2

	y = 11
	for (var x = 0; x <= 10; x++) {
		var z = (cpf[x] * y)
		lista2_cpf.push(z)
		y--
	}

	lista2_cpf.pop()
	lista2_cpf.pop()
	lista2_cpf.push(digito1 * 2)

	var soma = lista2_cpf.reduce(function(soma, i) {
		return soma + i
	})

	var conta = 11 -(soma % 11)

	if (conta > 9) {
		var digito2 = 0
	}

	else {
		var digito2 = conta
	}

	console.log(digito2)


	//Verificaçao

	if (cpf[9] == digito1 && cpf[10] == digito2) {
		console.log('Válido')
		var mensagem = 'O cpf que digitou é válido'
		var imagem = "Imagens/correto.png"
		var classe = 'sim'
	}

	else {
		console.log('nao é valido')
		var mensagem = 'O cpf que digitou não é válido'
		var imagem = 'Imagens/incorreto.png'
		var classe = 'nao'
	}

	const pai = document.getElementById('pai')
	const template = `
	<h2 class="${classe}">${mensagem}</h2>
	<img src=${imagem} width="40" height="40">
	`
	pai.innerHTML = template

	lista_cpf = []
	lista2_cpf = []

}


/* 

Algoritmo para validação do CPF 

CPF = 123.456-789-00

Excluí os dois últimos dígitos                                  |   Excluí somente o último dígito
                                                                |   
1 * 10 = 10                                                     |  1 * 11 = 11
2 * 9  = 18                                                     |  2 * 10 = 20
3 * 8  = 24                                                     |  3 * 9  = 27
4 * 7  = 28                                                     |  4 * 8  = 32
5 * 6  = 30                                                     |  5 * 7  = 35
6 * 5  = 30                                                     |  6 * 6  = 36
7 * 4  = 28                                                     |  7 * 5  = 35
8 * 3  = 24                                                     |  8 * 4  = 32
9 * 2  = 18                                                     |  9 * 3  = 27
                                                                |  0 * 2  = 0
Soma = total                                                    |  
                                                                |  Soma = total
Conta = 11 - (total % 11)                                       |
                                                                |  Conta = 11 - (total % 11)
Se conta > 9 o digíto 1 será igual 0                            |
                                                                |  Se conta > 9 o digíto 1 será igual 0
Se não, o digíto 1 será igual o resultado da própria conta      |  
                                                                |  Se não, o digíto 1 será igual o resultado da própria conta


Para verificar basta comparar se o dois últimos dígitos fornecidos são iguais ao dígitos calculados pelo algoritmo

*/