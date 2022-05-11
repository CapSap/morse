import { useState } from "react";

const InputContainer = () => {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  //function to convert eng to morse.

  return (
    <div>
      Input morse here
      <form>
        <textarea onChange={handleChange}></textarea>
        <button>Press to convert</button>
      </form>
      <div>reslt</div>
    </div>
  );
};

export default InputContainer;
