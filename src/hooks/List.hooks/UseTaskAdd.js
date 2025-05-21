import { warn } from "../../pages/toastMessages/toastMessages";
import { addMessage } from "../../pages/toastMessages/toastMessages";

const UseTaskAdd = ({ text, tasks, setTasks, setText }) => {
  const handleAdd = () => {
    if (!text) {
      warn();
      return;
    }
    const newTask = {
      id: Math.random(),
      text: text,
      completed: false,
      edit: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setText("");
    addMessage();
    localStorage.setItem("TodoData", JSON.stringify(updatedTasks));
  };
  return { handleAdd };
};

export default UseTaskAdd;
