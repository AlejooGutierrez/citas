import React from 'react'
import PropTypes from 'prop-types'


export const Cita = ({ cita, eliminarCita }) => (
        <div className="cita animate__animated animate__backInUp">
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button 
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(cita.id) }
                >Eliminar &times;</button>
        </div>
)

Cita.propTypes = {
    cia: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

