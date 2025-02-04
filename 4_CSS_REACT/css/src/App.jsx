import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;

  const [name] = useState("Samuel");

  const redTitle = true;

  return (
    <>
      {/* CSS Global */}
      <h1>Testes com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragrafo é do App.jsx</p>
      {/* Inline CSS */}
      <p
        style={{ color: "gold", padding: "25px", borderTop: "2px solid black" }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={name === "Samuel" ? { color: "gold" } : { color: "red" }}>
        {name}
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
    </>
  );
}

export default App;
