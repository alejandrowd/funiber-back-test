import React from 'react'

const Personaje = ({ animal, sonidoRestante }) => {
  return (
    <div className='row justify-content-center mb-2'>
      <h5>{animal.nombre}</h5>
      <ul>
        {animal.sonidos.map((sonido) => (
          <button
            key={sonido}
            className='btn btn-outline-dark mr-1'
            onClick={() => sonidoRestante(sonido)}
          >
            {sonido}
          </button>
        ))}
      </ul>
    </div>
  )
}

export default Personaje
