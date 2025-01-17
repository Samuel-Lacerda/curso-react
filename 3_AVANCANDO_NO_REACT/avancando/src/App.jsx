import "./App.css";
import ManageData from "./components/ManageData";
import ListRenderer from "./components/ListRenderer";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

import Paisagem from "./assets/2.png";
import { useState } from "react";

function App() {
  const name = "Samuel";
  const [username] = useState("Maria");
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
      <CarDetails brand="VW" km={10000} color="blue" />
    </div>
  );
}

export default App;
