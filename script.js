// deklarowania zmiennej przy użyciu var, z widocznością dla całej aplikacji
var variableOne = 5;
// deklarowania zmiennej przy użyciu let, z ograniczoną widocznością zmiennej
let variableTwo = 3;

console.log(variableOne); // = 5
console.log(variableTwo); // = 3
function test() {
	const vm = this;
	$('.button').click(function(){
		vm. //odniesienie do obiektu w referencji funkcji test
		this // odniesienie do obiektu w referebcji funkcji click
	})	 
	// staticTwo ? 3
	variableOne = 4;
	variableTwo = 7;
	console.log(variableOne); // = 4
	console.log(variableTwo); // = 7
}
// tutaj?
console.log(variableOne); // = 4
console.log(variableTwo); // = 3
