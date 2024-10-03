//! ESTÁN TODOS LOS CONSOLE.LOG COMENTADOS PARA QUE NO SALGA TODO CADA VEZ QUE REPRODUCES NODE TODAS LAS SOLUCIONES.


//? EJERCICIO 1

let myFavoriteHero = "Hulk"
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

//*console.log(h+y)*//

//? EJERCICIO 2 

/*1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};*/

const character = {name: "Jack Sparrow", age: 25};

/*1.2 Declara 3 variables con los nombres y valores siguientes 
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 
Muestralos por consola de esta forma: 
'Soy Jon Snow, tengo 24 años y me gustan los lobos.'*/

let firstName = "Jon";
let lastName = "Snow";
age = 24;

let textoEntero = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`;

//*console.log(textoEntero)*//

/*1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29}*/

const toy1 = {name: "Buss myYear", price:19};
const toy2 = {name: "Rallo mcKing", price:29}

//*console.log(toy1.price+toy2.price)*//

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.*/



  




//? EJERCICIO 3 

//1.1 Multiplica 10 por 5 y muestra el resultado mediante console//

//*console.log(10*5)

//1.2 Divide 10 por 2 y muestra el resultado en un console.//

//*console.log(10/2)

//1.3 Muestra mediante un console el resto de dividir 15 por 9.//

//*console.log(15 % 3)

/*1.4 Usa el correcto operador de asignación que resultará en o = 15, 
teniendo dos variables p = 10 y j = 5.*/

/*let p = 10
let j = 5
let o = (p + j)

//*console.log (o)

/*1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5*/

let c = 10
let m = 5
let i = (c * m)

//*console.log(i)

//? EJERCICIO 4

//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola//

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

//*console.log(avengers[0])*//

//1.2 Cambia el primer elemento de avengers a "IRONMAN"//

let cambio1 = avengers.shift()

let nuevoNombre = (avengers.unshift("IRONMAN"));

//*console.log(cambio1)

//*console.log(avengers)

//1.3 console numero de elementos en el array usando la propiedad correcta de Array//

//*console.log(avengers.length)


/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");

//*console.log(rickAndMortyCharacters)

let ultimoPersonaje= rickAndMortyCharacters.slice(4)

//*console.log(ultimoPersonaje)

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]

let borraUltimoNombre = rickAndMortyCharacters1.pop()

//*console.log(borraUltimoNombre)

//*console.log(rickAndMortyCharacters1)

//*console.log(rickAndMortyCharacters1[0])

//*console.log(rickAndMortyCharacters1[4])

//1.6 Elimina el segundo elemento del array y muestra el array por consola.

let borrado= rickAndMortyCharacters1.splice(1,1)

//*console.log(borrado)

//*console.log(rickAndMortyCharacters1)

// EJERCICIO 5

//En base al código siguiente, muestra los mensajes correctos por consola//

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo

      if(number1 === 10){
   console.log('number1 es estrictamente igual a 10')
   }

if (number2 / number1 == 2){
    console.log("number2 dividido entre number1 es igual a 2");
  }

  if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
  }

  if (number3 != number1) {
    console.log("number3 es distinto number1");
  }

  if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
  } 

  if (number3 * 5 == number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }

  if (number2 / 2 == number1 || number1 / 5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }


// EJERCICIO 6

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.//

//*for (let index = 0; index <= 9; index++) {
 //*  console.log(index)}
      


/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0*/   

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

for (let n = 0; n <= 10; n++) {
      if (numeros[n] % 2 === 0)
        console.log (numeros[n] % 2 === 0)
      
}




/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'*/

let oveja= [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

for (let i = 0; i < oveja.length; i++) {
  if (oveja[i] === 10) {
    console.log (i, "Dormido" )
  } else {
    console.log (i, "Intentando dormir")
    
  }
  
}

