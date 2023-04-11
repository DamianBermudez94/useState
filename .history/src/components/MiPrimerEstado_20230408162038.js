import { useState } from "react"
import React from 'react'

export const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState('Damián Bemúdez');

  const cambiarNombre = (e,nombreFijo) =>{
    setNombre(nombreFijo)
  } 
  return (
    <div>
      <h1>MiPrimerEstado</h1>

      <p>
        {nombre}
      </p>
      <button onClick={e =>cambiarNombre(e,"Sofia Bermudez")}>Cambiar</button>
      <input type="text" onChange={e=> cambiarNombre(e.target.value)} placeholder="Cambiar el nombre...."/>
    </div>
  )
}
