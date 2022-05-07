import { render } from "react-dom";
import Heading from "./components/Heading/Heading";
import InputContainer from "./container/InputContainer/InputContainer";

const App = () => {
  return (
    <div>
      <Heading />
      <br />
      <InputContainer />
      <br />
      <InputContainer />
    </div>
  );
};
render(<App />, document.getElementById("root"));
