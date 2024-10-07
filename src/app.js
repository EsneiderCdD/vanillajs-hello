// variable + nombre = [esto,es,un,arreglo] ;
let whoQuien = ["Esneider", "Julian", "Lucas", "Sofia"];
let actionAccion = ["estudia", "lee", "memoriza", "enseña"];
let whatQue = ["programacion", "un comic", "como centrar un div", "Javascript"];
let whenCuando = [
  "todo el dia",
  "incluso mientras duerme",
  "en la mañana",
  "en la noche"
];

// Función + nombre de la funcion
function generadordeExcusas() {
  // variable  + nombre de una variable "index" almacena el indice / posicion
  // en el array de uno de los elementos "nombreVariable"
  let whoQuienIndex = Math.floor(Math.random() * whoQuien.length);
  //redondea el numero hacia abajo
  let actionAccionIndex = Math.floor(Math.random() * actionAccion.length);
  //genera un numero decimal 0 a 1 *
  let whatQueIndex = Math.floor(Math.random() * whatQue.length);
  //Multiplica el número aleatorio por la longitud del array
  let whenCuandoIndex = Math.floor(Math.random() * whenCuando.length);

  //Concatenar una excusa con los elementos aleatorios de cada arreglo
  //Crea una nueva variable donde almacena y ordena nuestro resultado para finalmente...
  let excusa =
    whoQuien[whoQuienIndex] +
    " " +
    actionAccion[actionAccionIndex] +
    " " +
    whatQue[whatQueIndex] +
    " " +
    whenCuando[whenCuandoIndex];
  //nos regresa el
  return excusa;
}

// Evento que se ejecuta cuando la página carga
//window.onload: Es un evento en JavaScript que se ejecuta automáticamente cuando toda la página y sus recursos
//(imágenes, scripts, etc.) han sido completamente cargados.
window.onload = function() {
  //busca su homologo en HTML
  document.getElementById("excusa").innerHTML = generadordeExcusas();
};
