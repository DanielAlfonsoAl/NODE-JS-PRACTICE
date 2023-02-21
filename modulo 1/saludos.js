function saludar(nombre){
    return `hola ${nombre}`
}


function saludomundo () {
    return 'hola mundo'
}


/* 
De esta manera  module.exports  exporta los modulos
uno a uno
module.exports.saludar= saludar; 
*/

// para exportar varias a la vez

module.exports = {
    saludar: saludar,
    saludomundo: saludomundo
}