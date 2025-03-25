import { useState, useEffect } from 'react'
import Input from './Input';
import Tasks from './Tasks';
import { closestCorners, DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable'
import { Zoom,ToastContainer } from 'react-toastify';
import { warn } from './toastMessages/toastMessages';
import { addMessage } from './toastMessages/toastMessages';
import { clearAllMessage } from './toastMessages/toastMessages';


const TodoList = () => {

    const [text,setText]=useState("");
    const [tasks,setTasks]=useState([]);

    useEffect(()=>{
        const data=localStorage.getItem("TodoData");
        if(data){
            const savedData=JSON.parse(data)
            setTasks(savedData)
        }
      },[])

    const handleChange=(e)=>{
        setText(e.target.value);
    }

    const handleAdd=()=>{
        if(!text){
            warn()
            return;
        }
        const newTask={id:Math.random(),text:text,completed:false,edit:false};
        const updatedTasks=[...tasks,newTask];
        setTasks(updatedTasks);
        setText("");
        addMessage();
        localStorage.setItem("TodoData",JSON.stringify(updatedTasks));
    }

    const clearAll=()=>{
        setTasks([]);
        clearAllMessage();
        localStorage.removeItem("TodoData");
    }  

    const getTaskPos=(id)=>{
        return tasks.findIndex(task=>task.id===id);
    }
    
    const handleDragEnd = (ev) => {
        const {active, over} = ev;
        if(active.id === over.id) return;
        
        const originalPos=getTaskPos(active.id)
        const newPos=getTaskPos(over.id);
      
        const updatedTasks=arrayMove(tasks,originalPos,newPos);

        localStorage.setItem("TodoData",JSON.stringify(updatedTasks));
        
        setTasks(updatedTasks)
    }
  return (
      <>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <Input handleChange={handleChange} text={text} handleAdd={handleAdd} clearAll={clearAll}/>
            <Tasks tasks={tasks} setTasks={setTasks}/>
        </DndContext>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Zoom}
          /> 
      </>
  )
}

export default TodoList