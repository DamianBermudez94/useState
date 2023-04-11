import { useState } from "react"
import React from 'react'

export const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState('Damián Bemúdez');

  const cambiarNombre = e =>{
    setNombre("Sofia Bermudez")
  } 
  return (
    <div>
      <h1>MiPrimerEstado</h1>

      <p>
        {nombre}
      </p>
      <button onClick={cambiarNombre}>Cambiar</button>
    </div>
  )
}
