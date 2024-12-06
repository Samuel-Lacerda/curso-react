// components
import FirstComponent from "./components/FirstComponent";
import TemplateExpresions from "./components/TemplateExpressions";
import MyComponents from "./components/MyComponents";
import Events from "./components/Events";

// styles / css
import "./App.css";
import Challenge2 from "./components/Challenge2";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpresions />
      <MyComponents />
      <Events />
      <Challenge2 />
    </div>
  );
}

export default App;
