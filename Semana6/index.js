// let nombre = "Ivan"

// console.log("Nombre:", nombre);
// console.error("error!!");
// console.warn("warnings!!");

// console.dir(document)

///////////////////////////////////

// let nombre = "Ivan";
// let edad = "31";

// console.log(nombre, edad);

// let sumaedad2 = Number(edad) + 2;
// let sumaedad3 = Number(edad) + 3;

// console.log(sumaedad2 + sumaedad3);

// edad = 40;
// console.log(edad);

// const PI = 3.14;

// PI = 2; Nos devuelve un error porque const no puede cambiar de valor 

//////////////////////////////////

// Tipos de datos 7 

// let nombre = "String";
// let age = 33;
// let bool = true;
// let indefinido;
// let nulo = null;
// let simbolo = Symbol("abc");
// let objeto = {};

// console.log("Nombre:", typeof nombre);
// console.log("Age:", typeof age);
// console.log("Bool:", typeof bool);
// console.log("Indefinido:", typeof indefinido);
// console.log("Nulo:", typeof nulo);
// console.log("Simbolo:", typeof simbolo);
// console.log("Objeto:", typeof objeto);

//////////////////////////////////////////////

// Cambiar tipo de datos 

// let numero1 = "1.50";
// let numero2 = "2.50";

// let total = parseFloat(numero1) + parseFloat(numero2);

// console.log("Total:", typeof total, total);

// let catorce = 14;
// console.log("Catorce", typeof catorce, typeof catorce.toString());

///////////////////////////////////////////

// Scope (Alcance): Alcance global y alcance local (vive solo dentro de los bloques o llaves {})

// let nombre = "Ivan";

// console.log(nombre);
// console.log(nombre);

// {
//     let nombre2 = "Pablo";
//     console.log("Nombre2:", nombre2);
//     console.log("Nommbre", nombre);
// }

// console.log("Nombre2", nombre2);


/////////////////////////////////////////////////

// Funciones 

//     // Funcion declarativa: puede ser invocada antes de ser declarada
// console.log(suma(2,3));

// function suma(a,b){
//     return a + b
// }

//     // Expresion de funcion: se pueden acceder despues de haber sido declaradas
// let restar = function(a,b) {
//     return a-b
// }
// console.log(restar(4,2));

//     //Arrow function: De expresiones mas cortas y se definen dentro de una variable
// // const multiplicar = (a,b) => a * b;
// const multiplicar = (a,b) =>{
//     console.log("Hola dentro de multiplicar");
//     return a * b
// };

// console.log(multiplicar(2,2));


//////////////////////////////////////////////////
// Ciudadano de primera clase 

// function sumar(a,b){
//     return a + b
// }
// let suma = sumar //Se puede asignar una funciona  una variable sin invocarla
// console.log(suma(2,3));

// let suma2 = sumar(3,4); //Tambien se puede invocar una funcion dentro de una variable
// console.log("Suma2:", suma2)

// console.log(sumar(suma(4,4),4));
// Una funcion puede ser tratada como un valor y de sus caracteristicas es que puede retornar otra funcion 

//////////////////////////////////////////
// Closure: Es la combinacion de una funcion y el ambito o contexto donde esta fue declarada, estas recordaran el contexto donde fue creada, de esta manera podremos mantener valores y referencias.

// function sumabase(x){
//     return function(y){
//         return x + y
//     }
// }

// const sumabase5 = sumabase(5);
// const sumabase10 = sumabase(10);

// console.log(sumabase5(4));
// console.log(sumabase5(10));
// console.log(sumabase10(10));

// function count(){
//     let count=0;

//     return function(){
//         return count = count +1
//     }
// }

// let count1 = count();

// console.log(count1());
// console.log(count1());
// console.log(count1());
// console.log(count1());

////////////////////////////
// Ambito de una function 

// function uno(){
//     console.log("uno");
// }

// function dos(){
//     console.log("dos");
//     function tres(){
//         console.log("tres")
//         uno();
//     }

//     tres();
// }

// dos();

// Se puede acceder a las funciones globales de manera local, en el ejemplo se ejecuta primero "dos", escribiendo su log, se establece el valor de "tres" y se deja implicito la activacion de "uno"; se ejecuta 3 y finalmente se llama a la funcion global "uno". 

//////////////////////////////////////////////
// Operadores matematicos

// let suma = 2 + 2;
// console.log(suma);

// let resta = 2 - 2;
// console.log(resta);

// let multiplicacion = 2 * 2;
// console.log(multiplicacion);

// let potencia = 2 ** 2;
// console.log(potencia);

// let division = 2 / 2;
// console.log(division);

// let resto = 2 % 2;
// console.log(resto);

// // operadores de comparacion 
// Control de flujo

// let edad = prompt("Ingresa tu edad");

// if (edad > 21){
//     console.log("Tienes acceso");
// } else if (edad==20){
//     console.log("Felicidades hay una promocion para ti");
// } else{
//     console.log("No puedes ingresar");
// }

// switch 
// let fruta =prompt("Ingresa una fruta");

// switch(fruta){
//     case "uva":
//     console.log("Elegiste una uva");
//     break;
//     case "fresa":
//         console.log("Elegiste una fresa");
//         break;
//     case "banana":
//         console.log("Elegiste una banana");
//         break;
//     default:
//         console.log("No tenemos esa fruta")
// }

//////////////////////////////////
// Manejo de excepciones 

// function setname(name){
//     let result;
//     try{
//         if(name.length < 4) throw "short";
//         if (name.length > 10) throw "Large";
//         result = `El nombre ${name} es correcto` 
//     }   catch(error){
//        if (error == "short"){
//         console.log("El error es muy corto");
//        } else if (error == "large") {
//         console.log("El error es muy largo");
//        }
//     } finally{
//         console.log("finally")
//         if (result){
//             console.log("result", result)
//         }
//     }

//     console.log("result", result);

//     // console.log("El nombre es correcto", name)
// }    

// let nombre = prompt("Ingresa tu nombre");
// setname(nombre)

////////////////////////
// Objetos 

// let ivan = {
//     name: "Ivan",
//     lastname: "Leon",
//     age: 33,
//     getname: function(){
//         console.log(this)
//     }
// }

// console.log(ivan.name, ivan.lastname, ivan.age)
// ivan.getname()

// // let variable ="name";
// // console.log(getname[variable])

// let laptop ={
//     marca: "Lenovo",
//     anio: 2020,
//     procedencia: "usa",
//     getdata: function(){
//         return `La marca es ${this.marca} del año ${this.anio} de ${this.procedencia}`
//         // console.log(this)
//     }
// }

// console.log(laptop.marca, laptop.anio, laptop.procedencia)
// console.log(laptop.getdata())

//////////////////////////
// Arrays: permite listar valores

// let array = [0,1,2,3,4,5,6,7,8];
// console.log(array[array.length-1])

// let nombres=["sebas","jose", "Luis", "hector"]

// let alumnos =[
//     {
//         name:"sebas",
//         age:33
//     },
//     {
//         name: "Jose",
//         age:22    
//     },
//     {
//         name: "Luis",
//         age:24
//     }
// ];

// console.log(alumnos[2].age)

//////////////////////////////////
// Iteradores 

// let numbers = [0,1,2,3,4,5];
// let suma =0;

// for (let index = 0; index < numbers.length; index++){
//     // for (let index = 0; index < 10; index = index+2){ Avance de 2 en 2
//     // console.log("index", numbers[index])
//     suma = suma + numbers[index]
    
// }

// console.log(suma)

// while(true){
//     console.log("bloque white")
// }

// let number = 20;
// while(number >10){
//     number--
//     console.log(number)
// }

// do{
//     console.log("Se ejecutara aunque sea una vez")
// } while (number >20)

//////////////////////////////
// Objetos globales y metodos 

// let persona ={
//     nombre: "Hugo",
//     saludar(){
//         console.log(this.nombre);
//     },
// };

// persona.saludar();

// let nombre="Hugo Sanchez";

// console.log(nombre.length);

// // mayus
// console.log(nombre.toUpperCase());

// // minus 
// console.log(nombre.toLowerCase());

// // let nombresplit=nombre.split(" ");
// let nombresplit=nombre.split("");
// console.log(nombresplit);


// console.log(Math.E);
// console.log(Math.PI);

// // da un valor aleatorio entre 0 y 1 
// console.log(Math.random());

// // redondar 
// console.log(Math.round(10.3));
// console.log(Math.ceil(7.1)); //Redondear mas
// console.log(Math.floor(4.999)); //Redondear menos


// let hoy= new Date();

// console.log(hoy);

// // dia 
// console.log(hoy.getDate());
// // mes: Inicia en 0 enero a 11 diciembre
// console.log(hoy.getMonth());
// // Año 
// console.log(hoy.getFullYear());
// // timestamp - medianoche 01 Enero de 1970 
// console.log(hoy.getTime());



// // metodos de arreglos 
// let arr = ["kiwi", "Naranja", "Manzana", "Piña", "uva"];

// console.log(arr.length);

// // arr.forEach(function(item, indice){
// //     console.log(`${indice} - ${item}`);

// // });

// // let arrconvertido =arr.map(function(item, indice){
// //     return `<p data-id="${indice}">${item}</p>`
// // });

// // console.log(arrconvertido.join());

// let filtrado = arr.filter(function(item, indice){
//     return item.length < 5
// });

// console.log(filtrado);

/////////////////////////////////////////////////////////
// Algoritmos con Diagrama de Flujo 





