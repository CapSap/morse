import { useState } from "react";
import styles from "./InputContainer.module.scss";

const InputContainer = ({ translateFunction }) => {
  const [input, setInput] = useState();
  const [result, setResult] = useState("");

  const [isUnsupported, setIsUnsupported] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
    setResult(translateFunction(input));
  };
  //altering user for unsupported character and removing from state
  if (/[^A-Za-z0-9\s]/.test(input)) {
    alert("Unsupported characters entered- removing character");
    setInput(input.slice(0, -1));
  }

  return (
    <div className={styles.container}>
      <label htmlFor="englishInput">Input english to convert here: </label>
      <textarea
        className={styles.input}
        name="englishInput"
        onChange={handleChange}
        value={input}
      ></textarea>
      <button className={styles.button} onClick={handleClick}>
        Press to convert
      </button>
      <div className={styles.message}> Encoded message: {result}</div>
    </div>
  );
};

export default InputContainer;
