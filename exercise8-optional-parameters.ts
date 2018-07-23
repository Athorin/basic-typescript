/*
· Crear una función que acepte varios parámetros requeridos y que los muestre por consola utilizando
la anotación "interpolated". Por ejemplo:  console.log(`nombre: $(atributoNombre) edad: $(atributoEdad)`);
· Crear una función con un par de parámetros requeridos y un par de parámetros opcionales (?). Que los muestre por consola utilizando
la anotación "interpolated".
· Crear una función con un par de parámetros requeridos y un par de parámetros con valores por defecto. 
Que los muestre por consola utilizando
la anotación "interpolated".
*/
// Vamos!
console.log("Vamos!");

function myFunction1(nombre:string, edad:number ){
    console.log(`nombre: ${nombre} edad: ${edad}`);
}

function myFunction2(nombre:string, edad:number, sexo?:boolean, dormir?:boolean ){
    if (sexo && dormir)
        console.log(`nombre: ${nombre} edad: ${edad} sexo: ${sexo} dormir: ${dormir}`);
    else if(sexo)
        console.log(`nombre: ${nombre} edad: ${edad} sexo: ${sexo} `);
    else if(dormir)
        console.log(`nombre: ${nombre} edad: ${edad} dormir: ${dormir}`);
    else
        console.log(`nombre: ${nombre} edad: ${edad}`);
}

function myFunction3(nombre:string, edad:number, sexo = true, dormir = false ){
    if (sexo && dormir)
        console.log(`nombre: ${nombre} edad: ${edad} sexo: ${sexo} dormir: ${dormir}`);
    else if(sexo)
        console.log(`nombre: ${nombre} edad: ${edad} sexo: ${sexo} `);
    else if(dormir)
        console.log(`nombre: ${nombre} edad: ${edad} dormir: ${dormir}`);
    else
        console.log(`nombre: ${nombre} edad: ${edad}`);
}

myFunction1("Fran",26);
myFunction2("Fran",26,true,false);
myFunction3("Fran",26);