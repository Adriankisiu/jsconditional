// plik scripts.js

var x = 1,
	x1 = 2;  
var value = (x * x) + (2 * x * x1) - (x1 * x1);
console.log('wynik działania: ' + value);

if (value > 0) {
    console.log('wynik dodatni');
} 
else if (value < 0) {
    console.log('wynik ujemny');
} 
else {
    console.log('Wynik równy 0');
}