"use strict";

var casa = {
    ventanas: 2,
    cuantasVentanas: function(){
        console.log('La casa tiene ' + this.ventanas + ' ventanas.');
    }
}

function Coche(){
    this.ruedas = 4;
    this.cuantasRuedas = function(){
        console.log('El coche tiene ' + this.ruedas + ' ruedas.');
    }
}

casa.cuantasVentanas();
setTimeout(casa.cuantasVentanas, 1000); //se sale del scope el objeto que debería referenciar con this

var coche = new Coche();
coche.cuantasRuedas();
setTimeout(coche.cuantasRuedas.bind(coche),1000); //usamos el método bind para indicar cuál es el objeto referencia this