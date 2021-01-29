import React, { Fragment} from 'react';


const Recordatorio = ({tarea, eliminarp}) => {  

    // Crear State de Citas
   
   

    return ( 
        <Fragment>

            <div className="tarea">
          <p>Tarea: {tarea.hacer}</p>
         
          <p>Detalles: {tarea.detalles}</p>
         
          <p>Deadline: {tarea.deadline}</p>
          <p>Deadtime: {tarea.deadtime}</p>
          
          {tarea.id}
        
          <br/>
          <button
           onClick={ () => eliminarp(tarea.id)  }
           >Eliminar {tarea.hacer}</button>

          </div>
          
           
        </Fragment>
    );

    }
 
export default Recordatorio;