import React, { Fragment, useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'


const Formulario = ({ crearTareasp, setTareaEdit, tareaEdit, todoUpdate }) => {  
    
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(false)

    const [tarea, setTarea] = useState({
        hacer: '',
        detalles: '',
        deadline: '',
        deadtime: '',
        toggle: false,
    })

    const { hacer, detalles, deadline, deadtime } = tarea

    const formChange = e => {
          setTarea( { ...tarea, [e.target.name]: e.target.value } )
    }

    useEffect(() => {
        if(tareaEdit){ setTarea(tareaEdit) }
        else{ setTarea({ hacer:'', detalles:'', deadline:'', deadtime:'', toggle:false }) } //reset form 
    }, [tareaEdit])

    const enviarForm = e =>{

        e.preventDefault()

        if( hacer.trim() === '' || detalles.trim() === '' || 
            deadline.trim() === '' || deadtime.trim() === '' ){
                setError(true); return
        }

        setError(false)
    
        if(tareaEdit){ todoUpdate(tarea); setSuccessMessage('Actualizado con éxito') }
        else{ crearTareasp(tarea); setSuccessMessage('Agregado con exito') } //salida de objeto

        if(tareaEdit){ todoUpdate(tarea) }
        else{ tarea.id = uuidv4() }
       
        setTimeout(() => { setSuccessMessage(null) }, 6000)

        setTarea({ hacer: '', detalles: '', deadline: '', deadtime: '' }) //reset form 
    }
   
   return ( 
    <Fragment>

        <h2>Escribe tu recordatorio:</h2>
     
        <form onSubmit={ enviarForm }>

                <input
                    name="hacer"
                    type="text"
                    placeholder="hacer"
                    onChange={formChange}
                    value={hacer}/>  <br/>
                 
                <input
                    name="detalles"
                    type="text"
                    placeholder="detalles"
                    onChange={formChange}
                    value={detalles}/>  <br/>
             
                <label>deadline:</label>  <br/>

                <input
                    name="deadline"
                    type="date"
                    onChange={formChange}
                    value={deadline}/>  <br/>

                <input
                    name="deadtime"
                    type="time"
                    onChange={formChange}
                    value={deadtime} />  <br/>

                    
            { error ? <p>Usa todos los campos</p> : null}  <br/>
                 
            <button type="submit"> { tareaEdit ? 'Editar' : 'Agregar tarea' } </button>
            <br/><br/>
        </form>


        { tareaEdit &&
            <button onClick={ ()=> setTareaEdit(null) }> Nueva Tarea </button> 
        } 
                
        { successMessage && 
            <div>{ successMessage }</div> 
        }

    </Fragment>
   )
}

 
export default Formulario