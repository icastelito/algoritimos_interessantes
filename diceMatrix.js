function createDice(faces) {
	const diceFirstLine = [];
	const diceMatrix = [];
	for (let i = 0; i < faces; i++) {
		diceFirstLine.push(i + 1);
	}
	for (let j = 0; j < faces; j++) {
		diceMatrix.push([...diceFirstLine]);
		const element = diceFirstLine.shift();
		diceFirstLine.push(element);
	}
	return diceMatrix;
}

function rollDice(faces) {
	const diceMatrix = createDice(faces);
	const randomLine = Math.floor(Math.random() * faces);
	const randomCollumn = Math.floor(Math.random() * faces);
	const diceMatrixLine = diceMatrix[randomLine];
	const diceValue = diceMatrixLine[randomCollumn];
	return diceValue;
}

const d4 = rollDice(20);

// console.log(d4);

function testRollDice(faces, iterations) {
	let sum = 0;

	for (let i = 0; i < iterations; i++) {
		const result = rollDice(faces);
		sum += result;
	}

	const average = sum / iterations;
	console.log(
		`A média dos valores de um dado de ${faces} faces após ${iterations} lançamentos é: ${average.toFixed(2)}`
	);
	return average;
}

// Testando a função com um dado de 20 faces e 1000 lançamentos
testRollDice(20, 10000000);
