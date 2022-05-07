const InputContainer = () => {
  return (
    <div>
      <label htmlFor="engInput">English input</label>
      <textarea name="engInput"></textarea>
      <button>Translate</button>
      <label htmlFor="morseInput">Morse input</label>
      <textarea name="morseInput"></textarea>
    </div>
  );
};

export default InputContainer;
