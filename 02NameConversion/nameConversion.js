document.querySelector("#convert-btn").addEventListener("click", CaseStyle);

function CaseStyle() {
	document.querySelector("#pascal-case").innerHTML = get_text_pascal();
	document.querySelector("#camel-case").innerHTML =
		get_text_camel().charAt(0).toLowerCase() + get_text_camel().slice(1);
	document.querySelector("#snake-case").innerHTML = get_text_snake();
	document.querySelector("#screaming-snake-case").innerHTML =
		get_text_screaming_sanke();
	document.querySelector("#screaming-kebab-case").innerHTML =
		get_text_screaming_kebab();
	document.querySelector("#kebab-case").innerHTML = get_text_kebab();
}

function get_text_pascal() {
	var input_text = document.querySelector("#text").value;
	return input_text
		.split(" ")
		.map((a) => a.trim())
		.map((a) => a[0].toUpperCase() + a.substring(1))
		.join("");
}

function get_text_camel() {
	var input_text = document.querySelector("#text").value;
	return input_text
		.toLowerCase()
		.split(" ")
		.map((a) => a.trim())
		.map((a) => a[0].toUpperCase() + a.substring(1))
		.join("");
}

function get_text_snake() {
	var input_text = document.querySelector("#text").value;
	return input_text[0].toLowerCase() + input_text.slice(1).split(" ").join("_");
}

function get_text_screaming_sanke() {
	var input_text = document.querySelector("#text").value;
	return input_text.toUpperCase().split(" ").join("_");
}

function get_text_screaming_kebab() {
	var input_text = document.querySelector("#text").value;
	return input_text.toUpperCase().split(" ").join("-");
}

function get_text_kebab() {
	var input_text = document.querySelector("#text").value;
	return input_text.toLowerCase().split(" ").join("-");
}