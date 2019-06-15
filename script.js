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

// let arrayOfInteger = [1,2,3,4,5];
// let arrayOfString = [
// 	"carOne" /* element 0 */,
// 	"carTwo" /* element 1 */,
// 	"carThree" /* element 2 */];
// console.log(arrayOfString[0]); //wyświetlamy pierwszy element tablicy

// for (
// 	let i = 0 /* inicjacja zmiennej licznikowej */;
// 	i < 10 /* warunek ilości wykonywanych pętli */;
// 	i++ /* deklarujemy czy zmienna licznikowa ma si 
// 	zwiększać lub zmniejszać przy każdym wywołaniu pętli */
// 	// i = i + 1 to jest dokładnie to samo co i++
// 	) {
// 	console.log(i);
// }

// for (let i = 0; i < arrayOfString.length; i++) {
// 	console.log(arrayOfString[i]);
// }

// // inkrementacja
// i = 1;
// // w pętli, zmienna ma wartośc 1, 
// // po wykonaniu wykonuje się inkrementacja 
// i++;
// // w pętli, najpierw wykonuje się inkrementacja,
// // i wykorzystujemy w srodku powiększoną już zmienną  
// ++i;

// // dekrementacja
// let j = 1;
// j--;
// --j;

// // petla while, wykonuje się podczas gdy wynik warunku jest true
// let i = 0;
// while( i <= 10 ){
// 	console.log(i);
// 	i++;
// }

// i = 0;
// do { 
// 	console.log(i)
// 	i++;
// } while( i <= 5)


// // stwórz tablicę z 10 elementami, następnie wykonaj 
// // console.log dla elementów tablicy przy wykorzystaniu pętli do while
// // powyższe wykonaj w nowym pliku zad1.js, 
// // pamietaj aby plik dołączyć do strony 
// // - całość dodaj w commicie o nazwie "first quest"

// console.log(...arrayOfInteger);

// let x = 10;
// let y = 20;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y); //dzielenie
// console.log(x % y); //reszta z dzielenia

// // operacje wykonywane bezpośrednio na samym sobie
// x = 5;
// x += 1;
// x -= 1;
// x *= 1;
// // x = x*1 to samo
// x /= 1;
// x %= 1;
// // x = x % 1;

// x = 5
// (x == '5') // output true - sprawdzanie typu
// (x === '5') // output false - sprawdzanie typu

// function writeString($event) {
// 	console.log(this); //sprawdzamy czy istnieje this? i co zawiera
// 	// przypisanie obiektu z zawartością klas do stałej
// 	const classList = event.target.classList;
// 	// wykorzystanie metody contains do 
// 	// sprawdzenia czy nasz element klikniety posiada klase test
// 	if ( classList.contains('test') == true ) {
// 		console.log('jest klasa test');
// 	} else {
// 		console.log('nie ma klasy test');
// 	}
// 	// quest 1
// // warunek - jeśli element posiada 
// // klasę test, wypluj console.log 
// // ze stringiem "hej"
// 	// quest 2
// // dodaj do elementu klikniętego klasę "dodana"
// }

// // wykorzystanie atrybutu funkcyjnego bazując tylko i wyłącznie na js
// 	// gdy znamy id elementu
// 	const el = document.getElementById("nazwa_id");
// 	el.onclick = nazwa_funkcji;
// 	function nazwa_funkcji () {
// 		console.log('wykonanie onclick');
// 	}
// // inne atrybuty funkcyjne 
// onkeyup
// onkeydown
// onkeypress
// onfocus
// onblur
// onchange


let person = {
    name: "Peter",
    age: 28,
    gender: "Male"
};
// pętla która pozwala przejśc przez właściwości wszystkie obiektu
for (let i in person) {
	console.log(person[i])
}

let array = ["one", "two", "four"];
// pętla przechądząca przez wszystkie elementy tablicy
// nie powinno się używać tej pętli gdzie ważne są indexy naszej tablicy
for ( let element of array ) {
	console.log(element)
}

let string = "katowiceNoca";
for ( let char of string) {
	console.log(char)
}
