/*
Scrivi un programma che stampi i numeri da 1 a 100. 
Per multipli di tre il programma dovrà stampare “Fizz” 
al posto del numero e per multipli di cinque, invece, 
dovrà stampare “Buzz”. Infine, per i numeri multipli di 
tre e cinque il programma dovrà stampare “FizzBuzz”.
*/

for (i=1; i<=100; i++) {
  if (i % 15 == 0){
    console.log('FizzBuzz');
  } else if (i%3 == 0) {
    console.log('Fizz');
  } else if(i%5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i)
  }
}
