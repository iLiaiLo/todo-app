import { removeMessage } from "../../pages/toastMessages/toastMessages";
const UseTaskRemove = ({ tasks, setTasks }) => {
  const handleRemove = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("TodoData", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    removeMessage();
  };
  return { handleRemove };
};

export default UseTaskRemove;
