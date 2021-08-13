import React, { Fragment } from 'react'


const Recordatorio = ({ tarea, eliminarp, setTareaEdit, setTareaToggle }) => {  

  return ( 
    <Fragment>
        <div className="tarea">

          <p>Tarea: {tarea.hacer}</p>
          <p>Detalles: {tarea.detalles}</p>
          <p>Deadline: {tarea.deadline}</p>
          <p>Deadtime: {tarea.deadtime}</p>
          <p>ID: {tarea.id}</p>
        
          <br/>

          <button
            onClick={ ()=> eliminarp(tarea.id) }>
            Eliminar {tarea.hacer}
          </button>

          <br/> <br/>

          <button
            onClick={ ()=> setTareaEdit(tarea) }>
            Editar {tarea.hacer}
          </button>  <br/> <br/>

          <input
            name="toggle"
            type="checkbox"
            onChange={()=> setTareaToggle(tarea.id) }
          />  

        </div>
    </Fragment>
  )
}
 
export default Recordatorio