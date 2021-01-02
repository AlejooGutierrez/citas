import React, { useState, useEffect } from 'react'
import { Cita } from './components/Cita'
import { Formulario } from './components/Formulario'
import PropTypes from 'prop-types'
import { Footer } from './components/Footer'

function App() {

//localstorage

let citasIniciales = JSON.parse(localStorage.getItem('citas'))
if(!citasIniciales){
  citasIniciales = []
}

  const [citas, setCitas] = useState(citasIniciales)

  useEffect( ()=>{
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasIniciales] )

  //funcion que agregue citas actuales y agregue la nueva 
  const crearCita = cita =>{
      setCitas([
        ...citas, 
        cita
      ])
  }

  //eliminar cita

  const eliminarCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id)
    setCitas(newCitas)
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas'


  return (
    <>
    <h1>Administrador De Pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario 
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map(cita =>(
            <Cita 
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>

  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default App;
