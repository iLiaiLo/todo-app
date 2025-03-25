import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RxDragHandleDots1 } from "react-icons/rx";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import  '../styles/createdTasks.css';
import '../styles/checkbox.css';

const CreatedTask = ({task,handleCheck,handleEdit,handleRemove}) => {

  const {id}=task;

  const {attributes,listeners,setNodeRef,transform,transition}=useSortable({id});
    const style={
        transition,
        transform:CSS.Transform.toString(transform)
    }
  return (
    <div className={task.completed?'completed-task':'created-task'} style={style}>

          <div className="checkbox-wrapper-23" >
              <input type="checkbox" id={`check-${id}`} onChange={(e)=>handleCheck(e,id)} checked={task.completed}/>
             <label htmlFor={`check-${id}`} >
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
              </label> 
          </div>

          <div className='task-text'>{task.text}</div>
          <div className='task-actions'>
            <button className='edit' onClick={()=>handleEdit(id)}>
              <FaRegEdit />
            </button>
            <button onClick={()=>handleRemove(id)}>
              <FaTrashAlt />
            </button>
            <span
            ref={setNodeRef} 
            {...attributes}
            {...listeners}>
              <RxDragHandleDots1 />
            </span>
          </div>
    </div>
    
  )
}

export default CreatedTask