import { useState } from "react";

export default function CounterComponent() {
  const [counter, setCounter] = useState<number>(0);

  const incrementarCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementarCounter = () => {
    if (counter > 0) setCounter((prev) => prev - 1);
  };
  return (
    <div>
      <h2>Valor del contador: {counter}</h2>
      <button onClick={incrementarCounter}>Sumar</button>
      <button onClick={decrementarCounter}>Restar</button>
    </div>
  );
}
