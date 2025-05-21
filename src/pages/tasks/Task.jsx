import EditTask from "./EditTask";
import CreatedTask from "./CreatedTask";
import "../../styles/task.css";

const Task = ({
  task,
  editText,
  handleCheck,
  handleChange,
  handleSave,
  handleEdit,
  handleRemove,
  handleCancel,
}) => {
  return (
    <div className="task">
      {task.edit ? (
        <EditTask
          id={task.id}
          handleCancel={handleCancel}
          editText={editText}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      ) : (
        <CreatedTask
          task={task}
          handleEdit={handleEdit}
          handleCheck={handleCheck}
          handleRemove={handleRemove}
        />
      )}
    </div>
  );
};

export default Task;
