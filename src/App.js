import InputContainer from "./container/InputContainer";
import Heading from "./container/Heading";
import { encode, decode } from "./scripts/functions";
import MorseInput from "./container/MorseInput";

function App() {
  return (
    <div>
      <Heading />
      <InputContainer translateFunction={encode} />
      <br />
      <MorseInput translateFunction={decode} />
    </div>
  );
}

export default App;
