import React, { useState } from 'react'
import Task from './tasks/Task';
import '../App.css';
import { warn,saveMessage, removeMessage, completedMessage } from './toastMessages/toastMessages';

import {SortableContext} from '@dnd-kit/sortable';
import {verticalListSortingStrategy} from '@dnd-kit/sortable';

const Tasks = ({tasks,setTasks}) => {
    const [editText,setEditText]=useState("");


    const handleChange=(e)=>{
        setEditText(e.target.value)
    }

    const handleCheck=(e,id)=>{
        if(e.target.checked){
            completedMessage();
        }
        const updatedTasks=tasks.map(task=>{
            if(task.id===id){  
                return {...task,completed:!task.completed,edit:task.edit}
            }
            return task;
        })

        localStorage.setItem("TodoData",JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        
    }

    const handleEdit=(id)=>{
        tasks.forEach(task=>{
            if(task.id===id){
                setEditText(task.text);
            }
        })
        const updatedTasks=tasks.map(task=>{
            if(task.id===id){
                return {...task,edit:true}
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const handleSave=(id)=>{
        if(!editText){
            warn();
            return;
        }
        const updatedTasks=tasks.map(task=>{
            if(task.id===id){
                if(task.text===editText){
                    return {...task,edit:false}
                }
                else{
                    return {...task,text:editText,completed:false,edit:false}
                }
            }
            return task;
        })
        localStorage.setItem("TodoData",JSON.stringify(updatedTasks));
        setTasks(updatedTasks)
        setEditText("");
        
        saveMessage();
    }

    const handleCancel=(id)=>{
        const updatedTasks=tasks.map(task=>{
            if(task.id===id){
                return {...task,edit:false}
            }
            return task;
        })
        setTasks(updatedTasks)
        setEditText("");
    }

    const handleRemove=(id)=>{
        const updatedTasks=tasks.filter((task)=>task.id!==id);
        localStorage.setItem("TodoData",JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        removeMessage();
    } 
    

  return (
    <div className='tasks-container'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {
            tasks.map((task)=>{
                return(
                    <Task key={task.id}
                        editText={editText}
                        handleRemove={handleRemove}
                        handleEdit={handleEdit}
                        handleSave={handleSave}
                        handleCheck={handleCheck}
                        handleChange={handleChange}
                        handleCancel={handleCancel}
                        task={task}
                    />
                )
            })
        }
        </SortableContext>
    </div>
  )
}

export default Tasks