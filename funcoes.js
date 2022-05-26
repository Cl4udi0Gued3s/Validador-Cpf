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
