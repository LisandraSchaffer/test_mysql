function esNumero(val) {
  return typeof val === "number" && !isNaN(val);
}

export function sumar(a, b) {
  if (!esNumero(a) || !esNumero(b)) return "Error: Ambos deben ser números.";
  return a + b;
}

export function restar(a, b) {
  if (!esNumero(a) || !esNumero(b)) return "Error: Ambos deben ser números.";
  return a - b;
}

export function multiplicar(a, b) {
  if (!esNumero(a) || !esNumero(b)) return "Error: Ambos deben ser números.";
  return a * b;
}

export function dividir(a, b) {
  if (!esNumero(a) || !esNumero(b)) return "Error: Ambos deben ser números.";
  if (b === 0) return "Error: No se puede dividir por cero.";
  return a / b;
}

export default function info() {
  console.log("Este módulo permite sumar, restar, multiplicar y dividir.");
}
