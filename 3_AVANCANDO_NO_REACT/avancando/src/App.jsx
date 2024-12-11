import "./App.css";
import ManageData from "./components/ManageData";

import Paisagem from "./assets/2.png";

function App() {
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
    </div>
  );
}

export default App;
