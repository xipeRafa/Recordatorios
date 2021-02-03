import React, { Fragment,useState} from "react";
import Formulario from "./components/Formulario";
import Recordatorio from "./components/Recordatorio";


function App() {
  
const [tareas, funFillTareas] = useState([]) 
const [tareaEdit, setTareaEdit] = useState(null);

//mete cada objeto en un array 
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

 const tareaEditf = tarea => {
  setTareaEdit(tarea)
  console.log(tarea)
 }

 const todoUpdate = tareaEdit => {
  const changedTodos = tareas.map(tarea => (
     tarea.id === tareaEdit.id
      ? tareaEdit
      : tarea))
     funFillTareas(changedTodos);
}

 const titulo = tareas.length === 0 ? "No hay Tareas" : "Administra tus Tareas"; 

  return (
    <Fragment>
         {titulo}
     <h2>{ tareaEdit ? 'Editar tarea' : ' '}</h2>
      <Formulario  crearTareasp={crearTareasf} 
                  setTareaEdit={tareaEditf} tareaEdit={tareaEdit}
                  todoUpdate={todoUpdate}/>
 
      {tareas.map(tarea=>(<Recordatorio key={tarea.id} tarea={tarea} 
                  eliminarp={eliminarf} setTareaEdit={tareaEditf} />))}
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

  
        //eliminar elemento(objeto) de array    

        /* const states-1_state = satates.filter((state)=> state.id !== id) */
