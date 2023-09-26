/*
 

Retomando las APIs...

    -   APIs internas (API DOM, LocalStorage, Drag and Drop): Son todas las APIs que vienen por default en el navegador. 

    -APIs externas (Googles Maps, FakeStore API, API PaypAL, etc,): Son todas aquellas que tenemos que utilizar de proveedores externos.
    
    Ejemplo de la licuadora, donde la lincuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad. 

    Ventajas de utilizar APIs

        -Reestructurar y organizar los sistemas de forma que sean mas sencillos de usar
        -Permiten que los sistemas sean mas robustos 
        -Reducen los costos de mantenimiento 
        -Permiten que los sistemas sean escalables 
 */


/*

Sincronia 


Por defecto JS se comporta de una forma asincrona (de arriba a abajo, de izquierda a derecha), es ecir que utilizamios JS de una forma autobloqueante (si hay un error, lo que esta despues de ese error no se ejecuta)

*/



/*

//Ejemlo de una operacion sincronica 
console.log("Incia mi operacion sincronica");

function dosSincronica(){
    console.log("Dos");
}

function unoSincronico(){
    console.log("Uno");
    dosSincronica();
    console.log("Tres");
}
unoSincronico();
console.log("Finalizar mi operacion sincronica");

//Los casos donde me conviene tener operaciones sencronas, son (Lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecucuion de funciones "normales").

*/



 /*
Asincronica

    Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de codigo sin tener que esperar a que termine su ejecucion, para ejecutar otras lineas de codigo. (Dejar la carne en el asador mientras preparo otras en el ejemplo de la carna asada).
 */


/*

//Ejemplo de JS Asincronico

console.log("Inica mi operacion asincronica")
function dosAsync(){
    console.log("Uno")
    setTimeout(function(){//SetTime para ejecutar esta funcion despues de 3 segundos
    console.log("Dos");
    }, 3000);
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Finaliza mi operacion asincronica");




*/

/*
 Mecanismos para mejorar la asincronia 

 Para controlar la asincronia en JS, podemos usar algunos de estos mecanismos:

    - Callback: La forma mas clasica de manejar la asincronia. Se le conoce como (llamada de vuelta), basciamente es pasar una funcion como parametro de otra funcion, y se ejecutan una vez que se cumpla la condicion esperada. 

    //Metodo .map de los arrays 


    - Promesas: son objetos que representar un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si s va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple. La ventaja que tiene las promesas, es que no se anidan, en una sola funcion podemos manejar ambas situaciones. 

    La promesas tienen 3 estado posibles:
        - Pending: estado incial, cuando se crea una promesa. Aqui aun no hay resultados.
        - Fullfiled: cuando la operacion asincrona se vuelve con exito (resolver)
        - rejected: cuando la operacion asincrona falla (reject)


 */





/*

//Funcion especial para consumir APIs y manejar promesas 

//Instruccion de la conexion a mi servidor
fetch("https://fakestoreapi.com/products/1")


//dos escenarios (obtengo respuesta o no obtengo respuesta)

.then(datos =>{ //Cuando la promesa se resuelve ejecuto esta funcion
    console.log(datos);
    return datos.json(); //Convertir la respuesta
    

}) 

.catch(error =>{
    console.log("Error no encontramos el producto");
    console.log(error.message);

    if(error = "Error, no encontramos el producto"){
        console.log("Elige otro producto")
    }

})



*/


/**
 Sintaxis del fatch (con promesas)

    fetch (url a consumir)
        .then (response =>()) //Manejo la respuesta
        .then (datos => console.log(datos)) //Manejo el dato

        .catch (error => console.log(error));

 */

//asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1");

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

//usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
.then(function (resultado){
    console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
    return resultado.json();
})

//uso el metodo then para manejar el producto(lo rellenoo con la info del producto)
.then(function(producto){
    console.log("Informacion del producto: ", producto);
})

//uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
.catch(function (error){
    console.log("Error", error);
})






let respuestaServidor = "Felipe de Jesus Maqueda Gonzalez, 31, 2, 1"; //texto plano


//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}


//producto como objeto JSON
let productoJSON = {
    id:17,
    title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price:39.99,
    description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category:"women's clothing",
    image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating:{
        rate:3.8,
        count:679
    }}

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);


//Objeto JSON que voy a mandar a un servidor
let paciente ={
    nombre: "Felipe",
    edad: 31,
    estatus: "Registrado"
}

console.log(pacientr);

//Necesito convertirlo a una cadena de texto para que el servidor lo lea

let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);


let pacienteServidor = '{"nombre":"Felipe","edad":31,"status":"Registrado"}';

let pacienteJSOn = JSON.parse(pacienteServidor);
console.log(pacienteJSOn);

//Si mando un JSON al servidor, lo stringifeo
//Si recibo un string del servidor, lo parseo

function generarTarjetaProducto(){
    
    //Crear elemento
    createElement(img);
    img.src = producto.image;
    
}

//Metodo POST para enviar un nuevo producto 

fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion en consola para revisar la info