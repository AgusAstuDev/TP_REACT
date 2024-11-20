import { useEffect, useState } from "react";

export default function ComponentUseEffect() {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log("Componente Montado");
    return () => {
      console.log("Componente Desmontado");
    };
  }, []);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <p>{state ? "Es true" : "Es false"}</p>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Cambiar state
      </button>
    </div>
  );
}