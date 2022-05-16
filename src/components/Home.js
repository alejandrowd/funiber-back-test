import React, { useState } from 'react'

import ListaCanciones from './ListaCanciones'
import Personaje from './Personaje'

const Home = () => {
  const [reproduccionCancion, setReproduccionCancion] = useState('')
  const [numCancion, setNumCancion] = useState('')

  const rana = {
    nombre: 'Rana',
    sonidos: ['brr', 'birip', 'brrah', 'croac'],
  }

  const libelula = {
    nombre: 'Libélula',
    sonidos: ['fiu', 'plop', 'pep'],
  }

  const grillo = {
    nombre: 'Grillo',
    sonidos: ['cric-cric', 'trri-trri', 'bri-bri'],
  }

  let canciones = [
    'brr, fiu, cric-cric, brrah',
    'pep, birip, trri-trri, croac',
    'bri-bri, plop, cric-cric, brrah',
  ]

  const sonidoRestante = (setSonidos) => {
    let response

    canciones.some((cancion, num) => {
      const regex = RegExp(`(${setSonidos}),?`)
      if (regex.test(cancion)) {
        setNumCancion(num + 1)
        response = cancion.slice(
          cancion.indexOf(setSonidos) + setSonidos.length + 1
        )
      }

      return regex.test(cancion)
    })

    setReproduccionCancion(response)
  }

  return (
    <>
      <div className='container text-center mt-5'>
        <h1>EL LAGO MUSICAL</h1>

        <ListaCanciones />
        <div className='mb-5 mt-5'>
          <Personaje animal={rana} sonidoRestante={sonidoRestante} />
          <Personaje animal={libelula} sonidoRestante={sonidoRestante} />
          <Personaje animal={grillo} sonidoRestante={sonidoRestante} />
        </div>
        <p className='alert alert-success'>
          {numCancion ? `Canción # ${numCancion}` : 'Selecciona un sonido'}
        </p>
        <p className='border border-success p-3 font-weight-bold text-secondary'>
          {reproduccionCancion}
        </p>
      </div>
    </>
  )
}

export default Home
