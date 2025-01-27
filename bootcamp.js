const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log(`Olá, Herói!`);
rl.question("Qual é o seu nome? ", (nomeHeroi) => {
	rl.question("Qual é a sua experiência (XP)? ", (xp) => {
		const experiencia = parseInt(xp, 10);

		function classificarHeroi(nome, xp) {
			let nivel;

			if (xp < 1000) {
				nivel = "Ferro";
			} else if (xp <= 2000) {
				nivel = "Bronze";
			} else if (xp <= 5000) {
				nivel = "Prata";
			} else if (xp <= 7000) {
				nivel = "Ouro";
			} else if (xp <= 8000) {
				nivel = "Platina";
			} else if (xp <= 9000) {
				nivel = "Ascendente";
			} else if (xp <= 10000) {
				nivel = "Imortal";
			} else {
				nivel = "Radiante";
			}

			return `O Herói de nome ${nome} está no nível de ${nivel}.`;
		}

		console.log(classificarHeroi(nomeHeroi, experiencia));
		rl.close();
	});
});
