import ButtonConfig from "./components/ButtonConfig";
import ButtonList from "./components/ButtonList";
import Button from "./components/ButtonList";
import Input from "./components/Input";
import InputButtons from "./components/InputButtons";
import LogDisplay from "./components/LogDisplay";
import TicketDisplay from "./components/TicketDisplay";
import NavBar from "./components/NavBar";

function App() {
  let inputFields = [
    "Enter the Number Of Tickerts",
    "Ticket Release Rate",
    "Ticket Retrival Rate",
    "Maximum Ticket Capacity",
  ];
  let buttonNames = ["start", "stop"];
  let buttonFields = ["set ven", "set cus"];
  let buttonInputs = ["set vendor count","set customer count"];
  let buttonColor = ["primary" ,"danger"];

  return (
    <div>
      <NavBar />
      <div className="row ">
        <div className="container-xxl col p-5">
          <Input heading="Configuration Form" inputFields={inputFields} />
          <ButtonConfig>Config</ButtonConfig>
          <InputButtons buttonFields={buttonFields} buttonInputs={buttonInputs} />
          <ButtonList buttonNames={buttonNames} buttonColor={buttonColor}/>
        </div>

        <div className="col  p-5">
          <LogDisplay />
        </div>
        <div className="col p-5">
          <TicketDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
