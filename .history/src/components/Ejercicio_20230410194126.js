import React,{useState} from 'react'

export const Ejercicio = ({year}) => {

    const [anio, setAnio] = useState(year);

    const siguiente = e =>{
      setAnio(anio+1)
    }
    const anterior = e =>{
      setAnio(anio-1)
    }
    const cambiarYear = e=>{
      const dato= parseInt(e.target.value);
      if (Number.isInteger(dato)) {
        setAnio(dato)
      } else {
        setAnio(year)
      }
    }

  return (
    <div>
        <p>El año actual  es:{anio}</p>
        <button onClick={anterior}>Año anterior</button>
        <button onClick={siguiente}>Año siguiente</button>
        <p>Cambiar de año:</p>
        <input type='number' placeholder='Introduzca el año' onChange={cambiarYear}/>
    </div>
  )
}
