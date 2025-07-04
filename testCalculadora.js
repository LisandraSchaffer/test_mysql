import info, { sumar, restar, multiplicar, dividir } from './calculadora.js';

function calcular(operacion, a, b) {
  let resultado;

  switch (operacion) {
    case "sumar":
      resultado = sumar(a, b);
      break;
    case "restar":
      resultado = restar(a, b);
      break;
    case "multiplicar":
      resultado = multiplicar(a, b);
      break;
    case "dividir":
      resultado = dividir(a, b);
      break;
    default:
      resultado = "Operación no válida.";
  }

  console.log(`Resultado de ${operacion}:`, resultado);
}

info(); 
calcular("sumar", 10, 5);         
calcular("restar", 20, 5);        
calcular("multiplicar", 4, 6);    
calcular("dividir", 12, 4);       
calcular("dividir", 12, 0);       
calcular("sumar", "hola", 5);     
