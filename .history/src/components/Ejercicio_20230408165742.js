import React from 'react'

export const Ejercicio = (añoActual) => {

    const fecha = new Date();
    const anioActual = fecha.getFullYear();

    console.log(anioActual); // Imprime el año actual

  return (
    <div>
        <p>{anioActual}</p>
    </div>
  )
}
