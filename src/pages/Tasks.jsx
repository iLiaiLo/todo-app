import { useState } from "react";
import Task from "./tasks/Task";
import "../App.css";

import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import UseTaskTextChange from "../hooks/Task.hooks/UseTaskTextChange";
import UseTaskCheck from "../hooks/Task.hooks/UseTaskCheck";
import UseEdit from "../hooks/Task.hooks/UseEdit";
import UseTaskSave from "../hooks/Task.hooks/UseTaskSave";
import UseTaskRemove from "../hooks/Task.hooks/UseTaskRemove";

const Tasks = ({ tasks, setTasks }) => {
  const [editText, setEditText] = useState("");

  const { handleChange } = UseTaskTextChange({ setEditText });

  const { handleCheck } = UseTaskCheck({ tasks, setTasks });
  const { handleCancel, handleEdit } = UseEdit({
    tasks,
    setTasks,
    setEditText,
  });

  const { handleSave } = UseTaskSave({
    editText,
    tasks,
    setTasks,
    setEditText,
  });

  const { handleRemove } = UseTaskRemove({ tasks, setTasks });

  return (
    <div className="tasks-container">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              editText={editText}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
              handleSave={handleSave}
              handleCheck={handleCheck}
              handleChange={handleChange}
              handleCancel={handleCancel}
              task={task}
            />
          );
        })}
      </SortableContext>
    </div>
  );
};

export default Tasks;
