import "../App.css";
const Input = ({ handleChange, text, handleAdd, clearAll }) => {
  return (
    <div className="input-container">
      <input
        value={text}
        type="text"
        placeholder="Add a task"
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default Input;
