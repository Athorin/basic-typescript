/*
· Crea una clase con 3 propiedades cualquiera con el tipo que quieras
· Declara un objeto del tipo de la nueva clase y setea cada valor y muestra el objeto en la consola.
· Crea una clase con el nombre "Matematicas" con una función "suma"y un constructor con dos parámetros de tipo numérico cada uno. 
· Crea un objeto de tipo "Matematicas" y muestra por consola el resultado de la llamada a la construcción del objeto y de la función suma.
· Crea una clase "Persona" con las propiedades "nombre","apellidos" y "email". Añade una función "nombreCompleto" que combine el 
nombre y los apellidos.
· Crea un objeto de la clase "Persona", setea los atributos y muestra por consola la llamada a la función "nombreCompleto".
*/
// Vamos!
console.log("Vamos!");

class Car{

    private mark: string;
    private model: string;
    private power: number;


    constructor(mark: string, model: string, power: number){
        this.mark = mark;
        this.model = model;
        this.power = power;
    }


}

var car = new Car("Ford","Focus",1800);
console.log(car);


class Matematicas{

    private x: number;
    private y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    add(){
        return this.x + this.y;
    }
}

var mat = new Matematicas(1,2);
console.log(mat);
console.log(mat.add());