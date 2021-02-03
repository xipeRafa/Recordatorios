import React, { Fragment, useState,useEffect} from 'react';
import uuid from 'uuid/v4';


const Formulario = ({crearTareasp,setTareaEdit,tareaEdit,todoUpdate}) => {  
    
    const [successMessage, setSuccessMessage] = useState(null);

    // Crear State de Recordatorios
    const [tarea, fusFillTarea] = useState({
        hacer:'',
        detalles:'',
        deadline:'',
        deadtime:''
     })
    const {hacer,detalles,deadline,deadtime} = tarea

    const efUpdateStarea = e =>{
          fusFillTarea({
              ...tarea, 
              [e.target.name]: e.target.value
          })
        /*  console.log(tarea) */
     }

     useEffect(() => {
        if(tareaEdit){fusFillTarea(tareaEdit);}
        else{fusFillTarea({
            hacer:'',
            detalles:'',
            deadline:'',
            deadtime:''
        });}
    }, [tareaEdit])

     const[error,fusError]= useState(false)

     const enviarForm = e =>{
         e.preventDefault();
         if(deadtime.trim() === '' || hacer.trim() === '' || detalles.trim() === '' || deadline.trim() === ''){
            fusError(true)
             return;
         }
         fusError(false)

        /*  tarea.id = uuidv4 */
        /* let UID = "componente-" + Math.floor(Math.random() * 999999);
       tarea.id = UID; */
       if(tareaEdit){todoUpdate(tarea);setSuccessMessage('Actualizado con éxito Ahora presiona Escribir Nueva Tarea'); }
       else {crearTareasp(tarea);setSuccessMessage('Agregado con exito'); }//meter cada objeto en array

       if(tareaEdit){todoUpdate(tarea);}
       else {tarea.id = uuid()}
       
       setTimeout(() => {
        setSuccessMessage(null);
    }, 6000);
      //recetear formulario siempre al final
        fusFillTarea({
            hacer: '',
            detalles: '',
            deadline: '',
            deadtime: ''
        })   
   }
   
   return ( 
        <Fragment>
         <h2>Escribe tu recordatorio:</h2>
     
        <form onSubmit={enviarForm}>

               <input
               name="hacer"
               type="text"
               placeholder="hacer"
               onChange={efUpdateStarea}
               value={hacer}/>   <br/>
                 
               <input
                name="detalles"
               type="text"
               placeholder="detalles"
               onChange={efUpdateStarea}
               value={detalles}/>   <br/>
             
                <label>deadline:</label> 
                  <br/>
               <input
                 name="deadline"
                 type="date"
                 onChange={efUpdateStarea}
                 value={deadline}/> 
                <br/>

                <input
                 name="deadtime"
                 type="time"
                 onChange={efUpdateStarea}
                 value={deadtime} /> <br/>

          {error?<p>Usa todos los campos</p>:null}
                 <br/>
                 
             <button type="submit"> 
             { tareaEdit ? 'Editar' : 'Agregar tarea' }

             </button>
        </form>
        {tareaEdit &&
                <button onClick={() => setTareaEdit(null)} >
                     Escribir Nueva Tarea
                </button>  } 

        {successMessage && (<div>{ successMessage }</div>)}
        </Fragment>
    );

    }

 
export default Formulario;