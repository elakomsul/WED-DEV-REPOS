var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello World!';

var animals = ["dog", "cat", "bird"];

var person = {};
person = {
	eyeColor: "green",
	hairColor: "black",
	walk: function() {
		console.log("i'm walking");
	}
//alt ways of doing that ^ V

person.eyeColor = "brown";
person["eyeColor"] = "black";

console.log("person.eyeColor:" + person.eyeColor);
console.log("person[eyeColor]:" + person["eyeColor"]);



}

function changeContent( label ) {
	var content= "";
	if (label == "home") {};
		content = "home content";
}

else if (label == "taco") {
	content = "taco content";
}

pTag.innerHTML = content;