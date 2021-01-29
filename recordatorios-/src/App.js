import React, { Fragment,useState} from "react";
import Formulario from "./components/Formulario";
import Recordatorio from "./components/Recordatorio";


function App() {
  

 const [tareas, funFillTareas] = useState([]) 


//mete cada objeto en un array de objeos
  const crearTareasf = tarea =>{
         funFillTareas([
    ...tareas, tarea
  ]) 
  console.log('tareasArray', tareas)
  }

  
   const eliminarf = id => {
    const nuevoEstado= tareas.filter(tarea => tarea.id !== id );
    funFillTareas(nuevoEstado);
 }


   


 const titulo = tareas.length === 0 ? "No hay Tareas" : "Administra tus Tareas"; 

  return (
 
    <Fragment>
         {titulo}
      <Formulario 
         crearTareasp={crearTareasf}
      />
 
      {tareas.map(tarea=>(<Recordatorio key={tarea.id} tarea={tarea} eliminarp={eliminarf} />))}


    </Fragment>
  );

  }
export default App;







//estados:estado que es un array de objetos(renderear)
/*    {estate.map(state=>(
                       <Componente 
                       key={objeto.id}
                       cita={objeto}
                       eliminar={eliminarObjeto}
                       />
        ))} */

  
        //eliminar elemento(onjeto) de array    

        /* const states-1_state = satates.filter((state)=> state.id !== id) */
