import "./App.css";
import InputContainer from "./container/InputContainer";
import Heading from "./container/Headinng";
import { encode, decode } from "./scripts/functions";
import MorseInput from "./container/MorseInput";

function App() {
  const nonAlphabetinputChecker = (input, setState) => {
    if (/[^A-Za-z0-9\s]/.test(input)) {
      alert("Unsupported characters entered- removing character");
      setState(input.slice(0, -1));
    }
  };
  // const morseCodeChecker = (input, setState) => {
  //   if (/[^.-]/.test(input)) {
  //     alert("Unsupported characters entered- removing character");
  //     setState(input.slice(0, -1));
  //   }
  // };
  return (
    <div className="App">
      <Heading />
      <InputContainer
        translateFunction={encode}
        inputChecker={nonAlphabetinputChecker}
      />
      <br />
      <MorseInput translateFunction={decode} />
    </div>
  );
}

export default App;
