
import CheckBoxComponent from "./component/checkBox/checkBox";
import CounterDesign from "./component/counter/counterDesign";
import DropDown from "./component/dropDown/dropDown";
import Radio from "./component/Radio/radio";
import TextFeild from "./component/text field/textFeild";

function App() {
 

  return (
    <div className="App">
      <CounterDesign/>
      <TextFeild/>
      <Radio/>
      <CheckBoxComponent/>
      <DropDown/>
    </div>
  );
}

export default App;
