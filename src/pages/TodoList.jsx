import { useState } from "react";
import Input from "./Input";
import Tasks from "./Tasks";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { Zoom, ToastContainer } from "react-toastify";
import UseFetchTodo from "../hooks/List.hooks/UseFetchTodo";
import UseInputChange from "../hooks/List.hooks/UseInputChange";
import UseTaskAdd from "../hooks/List.hooks/UseTaskAdd";
import UseClear from "../hooks/List.hooks/UseClear";
import UseDragTask from "../hooks/List.hooks/UseDragTask";

const TodoList = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  UseFetchTodo({ setTasks });

  const { handleChange } = UseInputChange({ setText });

  const { handleAdd } = UseTaskAdd({ text, tasks, setTasks, setText });

  const { clearAll } = UseClear({ setTasks });

  const { handleDragEnd } = UseDragTask({ tasks, setTasks });
  return (
    <>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input
          handleChange={handleChange}
          text={text}
          handleAdd={handleAdd}
          clearAll={clearAll}
        />
        <Tasks tasks={tasks} setTasks={setTasks} />
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
  );
};

export default TodoList;
