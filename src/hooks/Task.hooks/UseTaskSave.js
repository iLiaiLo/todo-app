import { warn } from "../../pages/toastMessages/toastMessages";
import { saveMessage } from "../../pages/toastMessages/toastMessages";
const UseTaskSave = ({ editText, tasks, setTasks, setEditText }) => {
  const handleSave = (id) => {
    if (!editText) {
      warn();
      return;
    }
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (task.text === editText) {
          return { ...task, edit: false };
        } else {
          return { ...task, text: editText, completed: false, edit: false };
        }
      }
      return task;
    });
    localStorage.setItem("TodoData", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    setEditText("");

    saveMessage();
  };

  return { handleSave };
};

export default UseTaskSave;
