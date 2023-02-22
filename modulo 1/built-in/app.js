// Modulo Console
console.log('--- Modulo Console ---');
/* CONSOLE  es un modulo de node que no solo maleja el 
conocido console .log() si no que trae mas metodos */

console.log()
console.warn()
console.table()
console.assert()

// con .error se puede pasar el obj error el que nos brindara mas informacion del error
console.error( new Error ("¡¡ ocurrio un error !!"))
 
// Modulo Process
console.log('--- Modulo Process ---');
/* este modulo es utlizado para saber la informacion sobvre el proceso que estamos ejecutando 
y puede tener cierto control sobre el proceso*/

console.log(process);
// con process.env podemos ver las caracterizticas del ambiente de trabajo

console.log(process.env);

// con process.argv podemos ver todos los argumentos que se le pasan al proceso

console.log(process.argv) 

//  y con process.argv[2] podemos ver el argumento que le pasamos al proceso uno a uno 
console.log(process.argv[2]);

// con console.memoryUsage() podemos ver la memoria que esta usando el proceso

console.log(process.memoryUsage());

// Modulo operating system o (OS)
console.log('--- Modulo OS ---');
/* este modulo se utiliza para obtener informacion sobre  el sistema operativo
ya que no es un modulo global lo tenemos que importar*/

const os = require('os');
// se utiliza el metodo .type() para ver el tipo de sistema operativo
console.log('--- type ---');
console.log(os.type());

/// y .homedir se utliza para ver el directorio principal
console.log('--- homedir ---');
console.log(os.homedir());

// .uptime() nos muestra el tiempo que lleva encendido el sistema operativo
console.log('--- uptime ---');
console.log(os.uptime())

// Modulo Timers
/*se utiliza para hacer procedimientos asincronos osea que ejecuta un codigo luego
de un cierto periodo de tiempo*/

console.log('--- Modulo Timers ---');

// setTimeout() se utiliza para ejecutar un codigo luego de un cierto tiempo
// que parametros se le pasa al setTimeout 
// setTimeout(funcion a ejecutar, tiempo en milisegundos , parametros de la funcion si hay mas de uno se separan por comas)

function mostrarTema (tema){
    console.log('--- setTimeout On ---');
    console.log(`El tema que estoy aprendiendo es:  ${tema}`);
}

console.log('--- setTimeout Of ---');

setTimeout(mostrarTema, 3000, 'Node.js');

// setImmediate() se utiliza para ejecutar un codigo inmediatamente
// este se ejecuta despues del codigo sincrono y antes del codigo asincrono
// que parametros se le pasa al setImmediate 
// setImmediate(funcion a ejecutar, parametros de la funcion si hay mas de uno se separan por comas)

function mostrarTema2 (tema){
    console.log('--- setImmediate On ---');
    console.log(`El tema que estoy aprendiendo es:  ${tema}`);
}





