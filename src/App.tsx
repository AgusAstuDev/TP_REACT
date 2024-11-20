import "./App.css";
import MiPrimerComponente from "./components/MiPrimerComponente";
import CounterComponent from "./components/CounterComponent";
import ComponentUseEffect from "./components/ComponentUseEffect";

function App() {
  return (
    <>
      <div>
        <MiPrimerComponente text="Mi primer componente" color="red" />
        <CounterComponent />
        <ComponentUseEffect />
      </div>
    </>
  );
}

export default App;
