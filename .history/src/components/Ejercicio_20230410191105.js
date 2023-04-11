import React from 'react'
const fecha = new Date();
const anioActual = fecha.getFullYear();
export const Ejercicio = (añoActual) => {

   

    console.log(anioActual); // Imprime el año actual

  return (
    <div>
        <div>El año actual  es:{añoActual}</div>
        <button>Año anterior</button>
        <button>Año siguiente</button>
    </div>
  )
}
