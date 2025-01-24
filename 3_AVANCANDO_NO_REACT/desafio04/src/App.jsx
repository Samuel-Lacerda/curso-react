import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const users = [
    { nome: "Samuel", idade: 25, profissao: "Desenvolvedor" },
    { nome: "José", idade: 67, profissao: "Empresário" },
    { nome: "Emanuelle", idade: 24, profissao: "Funcionária pública" },
    { nome: "Guilherme", idade: 17, profissao: "Estágiario" },
  ];

  return (
    <>
      <UserDetails users={users} />
    </>
  );
}

export default App;
