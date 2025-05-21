import { arrayMove } from "@dnd-kit/sortable";
const UseDragTask = ({ tasks, setTasks }) => {
  const getTaskPos = (id) => {
    return tasks.findIndex((task) => task.id === id);
  };

  const handleDragEnd = (ev) => {
    const { active, over } = ev;
    if (active.id === over.id) return;

    const originalPos = getTaskPos(active.id);
    const newPos = getTaskPos(over.id);

    const updatedTasks = arrayMove(tasks, originalPos, newPos);

    localStorage.setItem("TodoData", JSON.stringify(updatedTasks));

    setTasks(updatedTasks);
  };
  return { handleDragEnd };
};

export default UseDragTask;
