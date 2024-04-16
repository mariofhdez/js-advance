"use strict";

function Persona(nombre){
    this.name = nombre;
}

var persona = new Persona("Neo");

Persona.prototype.saluda = function (){
    console.log("Hola, me llamo " + this.name);
}

console.log(persona.name);
persona.saluda();


//------------Heredando persona---------------------

function Agente(nombre){
    Persona.call(this, nombre);
    //esto ejecuta el constructor de Persona con el this de Agente
    //definiendo en el this de Agente la propiedad name
    //y asignándole el parámetro recibido
}

//le asignamos como prototipo una persona

Agente.prototype = new Persona('soy un prototipo');

var agente = new Agente('Smith');

agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
);


//--------------------Herencia múltiple---------------------

function Superheroe(){
    this.vuela = function(){
        console.log(this.name + ' vuela');
    }
    this.esquivaBalas = function(){
        console.log(this.name + ' esquiva balas')
    }
}

Object.assign(Agente.prototype, new Superheroe());

agente.vuela();
agente.esquivaBalas();