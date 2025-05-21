const UseInputChange = ({ setText }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return { handleChange };
};

export default UseInputChange;
