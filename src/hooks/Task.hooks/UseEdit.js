const UseEdit = ({ tasks, setTasks, setEditText }) => {
  const handleEdit = (id) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        setEditText(task.text);
      }
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, edit: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleCancel = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, edit: false };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditText("");
  };

  return { handleEdit, handleCancel };
};

export default UseEdit;
