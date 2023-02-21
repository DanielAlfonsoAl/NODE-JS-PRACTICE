
// haci se importa todo lo nque contiene el modulos

const saludos = require('./saludos')

// haci se importa uno o mas metodos que contenga e l modulo

const { saludar , saludomundo } = require('./saludos')

// como se utilizan los modulos ??

// con el objeto con todos los metodos
console.log("----- con el objeto -----");

console.log(saludos.saludar("dani"));
console.log(saludos.saludomundo());

// con las variables 
console.log("--- con variables ---");
console.log(saludar("hola jeje"));
console.log(saludomundo());

