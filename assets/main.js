/* //VARIABLES GLOBALES
let producto = prompt("Cual es el nombre del producto?");
let precio = parseFloat(prompt("Cual es el precio del producto?"));
const desc1 = (precio * 15) / 100;
const desc2 = (precio * 10) / 100;

//VARIABLES QUE NOS INDICA EL USUARIO

if (isNaN(precio)) {
  alert("por favor indicar el precio producto. ");
  let precio = parseFloat(prompt("Cual es el precio del producto?"));
} else {
  console.log(`El precio final es de $${precio - desc1}, por pago en efectivo`);
  console.log(
    `El precio final es de $${precio - desc2}, por pago en transferencia`
  );
  console.log(`El precio es $${precio} y puedes pagar hasta en 6 cuotas`);
  
}

//CREANDO UN ARRAY DE PRODUCTOS
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
let mostradoresLista = [];

let prod = new Producto("chelsea", 100000);
mostradoresLista.push(prod);

let prod2 = new Producto("chester", 100000);
mostradoresLista.push(prod2);

let prod3 = new Producto("chester gold", 120000);
mostradoresLista.push(prod3);

let prod4 = new Producto("berlin", 120000);
mostradoresLista.push(prod4);

console.log(mostradoresLista);
 */
