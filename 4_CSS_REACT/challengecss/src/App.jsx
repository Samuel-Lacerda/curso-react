import Cars from "../components/Cars";
import "./App.css";

function App() {
  const cars = [
    { modelo: "Corsa", cor: "Vermelho", fabricante: "Chevrolet" },
    { modelo: "Gol", cor: "Branco", fabricante: "Volkswagem" },
    { modelo: "Fiesta", cor: "Azul", fabricante: "Ford" },
  ];
  return (
    <>
      <Cars cars={cars} />
    </>
  );
}

export default App;
