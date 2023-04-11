import React,{useState} from 'react'

export const Ejercicio = ({year}) => {

    const [anio,setAnio] = useState(year);

    const siguiente = e =>{
      setAnio(anio+1)
    }
    const anterior = e =>{
      setAnio(anio-1)
    }

  return (
    <div>
        <p>El año actual  es:{anio}</p>
        <button onClick={anterior}>Año anterior</button>
        <button onClick={siguiente}>Año siguiente</button>
    </div>
  )
}
