import "./App.css";
import MiPrimerComponente from "./components/MiPrimerComponente";
import CounterComponent from "./components/CounterComponent";
import ComponentUseEffect from "./components/ComponentUseEffect";
import FormComponent from "./components/FormComponent";
import { AppProduct } from "./components/AppProduct";

function App() {
  return (
    <>
      <div>
        <MiPrimerComponente text="Mi primer componente" color="red" />
        <CounterComponent />
        <ComponentUseEffect />
        <FormComponent />
        <AppProduct />
      </div>
    </>
  );
}

export default App;
