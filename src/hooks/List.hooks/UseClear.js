import { clearAllMessage } from "../../pages/toastMessages/toastMessages";
const UseClear = ({ setTasks }) => {
  const clearAll = () => {
    setTasks([]);
    clearAllMessage();
    localStorage.removeItem("TodoData");
  };
  return { clearAll };
};

export default UseClear;
