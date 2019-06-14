// // deklarowania zmiennej przy użyciu var, z widocznością dla całej aplikacji
// var variableOne = 5;
// // deklarowania zmiennej przy użyciu let, z ograniczoną widocznością zmiennej
// let variableTwo = 3;

// console.log(variableOne); // = 5
// console.log(variableTwo); // = 3
// function test() {
// 	const vm = this;
// 	$('.button').click(function(){
// 		vm. //odniesienie do obiektu w referencji funkcji test
// 		this // odniesienie do obiektu w referebcji funkcji click
// 	})	 
// 	// staticTwo ? 3
// 	variableOne = 4;
// 	variableTwo = 7;
// 	console.log(variableOne); // = 4
// 	console.log(variableTwo); // = 7
// }
// // tutaj?
// console.log(variableOne); // = 4
// console.log(variableTwo); // = 3



// // typowanie
//  let a = "3"; // zmienna jest stringiem
//  let b = 4; // zmienna jest integerem
//  let bB = 4.3; //zmienna jest float integerem

//  let b = 4 * a; // NaN 

// let aA = 4;
// //  aA is Undefined
// //  aA is integer

// // object data typo
// let emptyCar = {};
// const car = {
// 	"model": "bmw",
// 	"color": "red",
// 	"doors": 5
// }

let arrayOfInteger = [1,2,3,4,5];
let arrayOfString = ["carOne" /* element 0 */, "carTwo" /* element 1 */, "carThree" /* element 2 */];
console.log(arrayOfString[0]); //wyświetlamy pierwszy element tablicy

for (
	let i = 0 /* inicjacja zmiennej licznikowej */;
	i < 10 /* warunek ilości wykonywanych pętli */;
	i++ /* deklarujemy czy zmienna licznikowa ma si 
	zwiększać lub zmniejszać przy każdym wywołaniu pętli */
	// i = i + 1 to jest dokładnie to samo co i++
	) {
	console.log(i);
}

for (let i = 0; i < arrayOfString.length; i++) {
	console.log(arrayOfString[i]);
}





