const db = require('./db');

function getTelefonos() {
  const sql = `
    SELECT nombre, apellido, telefono
    FROM PACIENTE
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener teléfonos:', err.message);
      return;
    }
    console.log('Teléfonos de los pacientes:');
    console.table(results);
  });
}

function getTelefonoPaciente(nro_historial_clinico) {
  const sql = `
    SELECT nombre, apellido, telefono
    FROM PACIENTE
    WHERE nro_historial_clinico = ?
  `;
  db.query(sql, [nro_historial_clinico], (err, results) => {
    if (err) {
      console.error('Error al buscar teléfono del paciente:', err.message);
      return;
    }
    if (results.length === 0) {
      console.log('No se encontró ningún paciente con ese número de historial.');
    } else {
      console.log(`Teléfono del paciente ${results[0].nombre} ${results[0].apellido}:`, results[0].telefono);
    }
  });
}

function getMedicosPaciente(nro_historial_clinico) {
  const sql = `
    SELECT M.nombre AS nombre_medico, M.apellido AS apellido_medico
    FROM INGRESO I
    INNER JOIN MEDICO M ON I.matricula_medico = M.matricula
    WHERE I.nro_historia_paciente = ?
  `;
  db.query(sql, [nro_historial_clinico], (err, results) => {
    if (err) {
      console.error('Error al obtener médicos:', err.message);
      return;
    }
    if (results.length === 0) {
      console.log('El paciente no fue atendido por ningún médico.');
    } else {
      console.log(`Médicos que atendieron al paciente con historial ${nro_historial_clinico}:`);
      console.table(results);
    }
  });
}

//funciones para calculadora
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
      resultado = "Operación no válida. Use: sumar, restar, multiplicar o dividir.";
  }

  console.log(`Resultado de ${operacion}:`, resultado);
}

info();

// Pruebas
calcular("sumar", 10, 5);         // 15
calcular("restar", 10, 5);        // 5
calcular("multiplicar", 10, 5);   // 50
calcular("dividir", 10, 2);       // 5
calcular("dividir", 10, 0);       // Error
calcular("sumar", "a", 5);        // Error
