import { useState } from "react";
import styles from "./MorseInput.module.scss";

const MorseInput = ({ translateFunction, inputChecker }) => {
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
  if (input && /[^\s.\-/]+/.test(input)) {
    alert("Unsupported characters entered- removing character");
    setInput(input.slice(0, -1));
  }

  return (
    <div className={styles.container}>
      <label htmlFor="morseInput">Input morsecode to convert here: </label>
      <textarea
        className={styles.input}
        name="morseInput"
        onChange={handleChange}
        value={input}
      ></textarea>
      <button className={styles.button} onClick={handleClick}>
        Press to convert
      </button>
      <div className={styles.message}> Decoded message :{result}</div>
    </div>
  );
};

export default MorseInput;
