import "./App.css";
import MiPrimerComponente from "./components/MiPrimerComponente";
import CounterComponent from "./components/CounterComponent";

function App() {
  return (
    <>
      <div>
        <MiPrimerComponente text="Mi primer componente" color="red" />
        <CounterComponent />
      </div>
    </>
  );
}

export default App;
