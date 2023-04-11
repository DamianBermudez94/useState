import React from 'react'

export const Ejercicio = (añoActual) => {

    const fecha = new Date();
    const anioActual = fecha.getFullYear();

    console.log(anioActual); // Imprime el año actual

  return (
    <div>
        <p>El año actual  es:{anioActual}</p>
        <button>Año anterior</button>
        <button>Año siguiente</button>
    </div>
  )
}
