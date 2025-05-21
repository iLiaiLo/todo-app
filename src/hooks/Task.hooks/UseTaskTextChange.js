const UseTaskTextChange = ({ setEditText }) => {
  const handleChange = (e) => {
    setEditText(e.target.value);
  };
  return { handleChange };
};

export default UseTaskTextChange;
