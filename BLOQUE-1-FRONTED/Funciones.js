

//? EJERCICIO 1

/*Iteración #1: Buscar el máximo
Completa la función que tomando dos números como argumento devuelva el más alto*/

function sum(numberOne , numberTwo) {
    return console.log (Math.max (numberOne, numberTwo))
      }

  sum(10,30)


//? EJERCICIO 2

/*Iteración #2: Buscar la palabra más larga
Completa la función que tomando un array de strings como argumento devuelva el más largo,
 en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord(heroe) { 
  let longest = ""

  for (const word of heroe) {
    if (word.length > longest.length) {
      longest = word; 
    }
    }
    
   return longest;
}
  
console.log(findLongestWord(avengers))

//? EJERCICIO 3

/* Iteración #3: Calcular la suma

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y 
devuelve la suma de todos los números de la matriz. 
Puedes usar este array para probar tu función: */

const numbers = [1, 2, 3, 5, 45, 37, 58];

let totalNumbers = numbers.reduce (
  function (acc, valorActual) {
    return acc + valorActual;
},0
)

console.log(totalNumbers)

//? EJERCICIO 4

/*Iteración #4: Calcular el promedio
Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const num = [12, 21, 38, 5, 45, 37, 6];
let promedio = num.reduce (
  function (acc, valorActual) {
    return acc + valorActual / num.length;
},0
)

console.log (promedio)

