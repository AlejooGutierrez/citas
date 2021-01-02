import React, { useState } from 'react'
import uuid from "uuid/dist/esm-browser/v4";

export const Formulario = ({crearCita}) => {

    const [cita, setCita]= useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = useState( false )

    const handleChance = e =>{
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const {mascota, propietario,fecha, hora, sintomas} = cita

    const submitCita = e =>{
        e.preventDefault()

        if(mascota.trim() === ''|| propietario.trim() === '' || fecha.trim() === '' || hora.trim() === ''|| sintomas.trim() === '' ){
            setError(true)
            return;
        }
        setError(false)

        cita.id = uuid()

        //Crear cita
        crearCita(cita)

        //Limpiar form

        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }


    return (
        <>
            <h2>Crear cita</h2>
            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota" 
                    onChange={handleChance}
                    value={mascota}
                    />

                <label>Nombre Del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Del Dueño De La Mascota" 
                    onChange={handleChance}
                    value={propietario}
                    />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChance}
                    value={fecha}
                    />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChance}
                    value={hora}
                    />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChance}
                    value={sintomas}
                    ></textarea>

                    {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    >Agregar Cita</button>
            </form>
        </>
    )
}
