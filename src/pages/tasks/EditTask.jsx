import { FaSave } from "react-icons/fa";

import { MdCancel } from "react-icons/md";

import '../styles/editedTasks.css'
const EditTask = ({id,editText,handleChange,handleSave,handleCancel}) => {


  return (
    <div className="edited-task">
        <input type="text" value={editText} onChange={handleChange} />
        <button className='save' onClick={()=>{
          handleSave(id);
        }}>
          <FaSave />
        </button>
        <button className='cancel' onClick={()=>handleCancel(id)}>
          <MdCancel />
        </button>
    </div>
  )
}

export default EditTask