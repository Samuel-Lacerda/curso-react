import "./App.css";
import ManageData from "./components/ManageData";
import ListRenderer from "./components/ListRenderer";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Paisagem from "./assets/2.png";
import { useState } from "react";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const name = "Samuel";
  const [username] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0 },
    { id: 2, brand: "Porshe", color: "Verde", newCar: false, km: 10000 },
    { id: 3, brand: "Honda", color: "Preto", newCar: false, km: 2340 },
  ];

  function showMessage() {
    console.log("Evento do elemento pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        {/* Imagem em public*/}
        <img src="/1.jpg" alt="Paisagem" className="img" />
      </div>
      <div>
        {/* Imagem em assets */}
        <img src={Paisagem} alt="Paisagem" className="img" />
      </div>
      <ManageData />
      <ListRenderer />
      <CondicionalRender />
      {/* props */}
      <ShowUserName name={username} />
      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color="blue" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      <Fragment propFrag="Teste com props" />
      <Container myValue="testando">
        <p>E este é o conteúdo!</p>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
