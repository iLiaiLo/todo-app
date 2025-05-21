import { useEffect } from "react";
const UseFetchTodo = ({ setTasks }) => {
  useEffect(() => {
    const data = localStorage.getItem("TodoData");
    if (data) {
      const savedData = JSON.parse(data);
      setTasks(savedData);
    }
  }, [setTasks]);
};

export default UseFetchTodo;
