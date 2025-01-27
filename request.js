const url =
	"https://id.twitch.tv/oauth2/token?client_id=9m110n0j8xrew426cwgf83uv2c8k87&client_secret=ndasmd5lw3jqr0y4ogyw4vrkeiku5d&grant_type=client_credentials";

async function fetchData() {
	try {
		const response = await fetch(url, {
			method: "POST",
		});
		const data = await response.json();
		console.log(data);

		const genresResponse = await fetch("https://api.igdb.com/v4/genres", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": "9m110n0j8xrew426cwgf83uv2c8k87", // Verifique se este é o Client-ID correto
				Authorization: `bearer ${data.access_token}`, // Verifique se este é o token correto
			},
			body: "fields checksum,created_at,name,slug,updated_at,url;",
		});
		const genresData = await genresResponse.json();
		console.log(genresData);
	} catch (err) {
		console.error(err);
	}
}

fetchData();
