let metodoPago = prompt(
  "Le calcularemos su descuento segun su metodo de pago. Ingrese aqui su metodo de pago: (efectivo, transferencia, tarjeta de credito)"
).toLowerCase();

function tipoPago() {
  if (metodoPago === "efectivo") {
    console.log("Tu descuento sera del 15%!");
  } else if (metodoPago === "transferencia") {
    console.log("Tu descuento sera del 10%!");
  } else if (metodoPago === "tarjeta de credito") {
    console.log("Puede pagar hasta 6 cuotas!");
  } else {
    console.log("No trabajamos ese metodo de pago! Lo sentimos.");
    alert("No trabajamos ese metodo de pago! Lo sentimos.");
  }
}
tipoPago();

/* switch (metodoPago) {
  case "Efectivo".toLowerCase:
    console.log("Su descuento sería del 15%!");
    break;
  case "Transferencia".toLowerCase:
    console.log("Su descuento sería del 10%!");
    break;
  case "Tarjeta de credito".toLowerCase:
    console.log("Tiene hasta 6 cuotas!");
    break;
  default:
    console.log("No trabajamos con ese metodo de pago!");
    break;
}
 */
/* const tipoDescuento = () => {
  do {
    alert("No trabajamos ese metodo de pago!");
  } while (
    metodoPago != "efectivo" ||
    metodoPago != "transferencia" ||
    metodoPago != "tarjeta de credito"
  );
}; */

/*   while (
    formaDePago === "Efectivo" ||
    formaDePago === "Transferencia" ||
    formaDePago === "Tarjeta de credito"
  ) {
    console.log(descuento) 
*/
