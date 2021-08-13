import React, { Fragment,useState} from "react"
import Formulario from "./components/Formulario"
import Recordatorio from "./components/Recordatorio"


function App() {
  
  const [tareas, setTareas] = useState([]) 
  const [tareaEdit, setTareaEdit] = useState(null)
  console.log(tareas)

  //mete cada objeto en un array 
  const crearTareasf = tarea =>{ setTareas( [...tareas, tarea] ) }

  const eliminarf = id => {
    setTareas( tareas.filter( tarea => tarea.id !== id ) )
  }
  
  const tareaEditf = tarea => { setTareaEdit(tarea) }

  const todoUpdate = update => {
      setTareas(tareas.map( tarea => tarea.id === update.id ? update : tarea ))
      setTareaEdit(null)
  }
  
  const setTareaToggle = toggle => { 
      setTareaEdit(tareas.map( tarea => tarea.id === toggle ? tarea.toggle = !tarea.toggle : tarea.toggle ))
      setTareaEdit(null) 
  }

  const titulo = tareas.length === 0 ? "No hay Tareas" : "Administra tus Tareas" 

  return (
    <Fragment>

      {titulo}

      <h2>{ tareaEdit && 'Editar tarea' }</h2>

      <Formulario 
          crearTareasp={crearTareasf} 
          setTareaEdit={tareaEditf} 
          tareaEdit={tareaEdit}
          todoUpdate={todoUpdate} />
 
      {tareas.map( tarea => ( 
            <Recordatorio 
                key={tarea.id}
                tarea={tarea} 
                eliminarp={eliminarf} 
                setTareaEdit={tareaEditf}
                setTareaToggle={setTareaToggle} />
          )
        )
      }

    </Fragment>
  )
}

export default App

 


