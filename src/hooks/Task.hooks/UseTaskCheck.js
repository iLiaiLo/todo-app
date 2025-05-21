import { completedMessage } from "../../pages/toastMessages/toastMessages";
const UseTaskCheck = ({ tasks, setTasks }) => {
  const handleCheck = (e, id) => {
    if (e.target.checked) {
      completedMessage();
    }
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed, edit: task.edit };
      }
      return task;
    });

    localStorage.setItem("TodoData", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };
  return { handleCheck };
};

export default UseTaskCheck;
