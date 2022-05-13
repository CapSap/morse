import InputContainer from "./container/InputContainer";
import Heading from "./container/Heading";
import { encode, decode } from "./scripts/functions";
import MorseInput from "./container/MorseInput";
import styles from "./scss/App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Heading />
      <InputContainer translateFunction={encode} />
      <br />
      <MorseInput translateFunction={decode} />
    </div>
  );
}

export default App;
