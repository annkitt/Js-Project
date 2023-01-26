// Default joke when page load

fetch("https://api.chucknorris.io/jokes/random")
	.then((Response) => {
		return Response.json();
	})
	.then((data) => {
		var joke = data.value;
		var jokeDiv = document.querySelector(".joke");
		jokeDiv.innerHTML = joke;
	});

// joke after clicking the button
var btn = document.querySelector(".btn").addEventListener("click", () => {
	fetch("https://api.chucknorris.io/jokes/random")
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			var joke = data.value;
			var jokeDiv = document.querySelector(".joke");
			jokeDiv.innerHTML = joke;
		});
});