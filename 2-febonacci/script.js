function mostrarNumero(fibonacci) {
	document.getElementById("mostrarNumero").innerHTML = fibonacci;
}

function mostrarMensagem(mensagem) {
	document.getElementById("verificarSequencia").innerHTML = mensagem;
}

function calcularFibonacci() {
	const num = Number(document.getElementById("numero").value);

	let soma = 0;
	let fibonacciAnterior = 0;
	let fibonacciProximo = 1;

	for (let i = 0; i <= num; i++){
		soma = fibonacciAnterior + fibonacciProximo;
		fibonacciAnterior = fibonacciProximo;
		fibonacciProximo = soma;
	}

	mostrarNumero(fibonacciAnterior);

	let pertenceSequenciaFibonacci = false;
	let num1 = 0, num2 = 1, fibonacciAtual = 0;
	while (fibonacciAtual < num) {
		fibonacciAtual = num1 + num2;
		num1 = num2;
		num2 = fibonacciAtual;
		if (fibonacciAtual === num) {
			pertenceSequenciaFibonacci = true;
			break;
		}
	}

	if (pertenceSequenciaFibonacci) {
		mostrarMensagem("O número pertence à sequência de Fibonacci!");
	} else {
		mostrarMensagem("O número não pertence à sequência de Fibonacci.");
	}
}