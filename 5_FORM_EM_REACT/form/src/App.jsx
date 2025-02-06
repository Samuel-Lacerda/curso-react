import MyForm from "../components/MyForm";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h2>Forms</h2>
        <MyForm
          user={{
            name: "Pedro",
            email: "pedrinho123@gmail.com",
            bio: "Sou um programador",
            role: "admin",
          }}
        />
      </div>
    </>
  );
}

export default App;
