import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // controlled inputs
  // gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário.");
    console.log(name, email);
  };

  return (
    <div>
      {/* Envio de form */}
      {/* Criação de Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={handleName}
          value={name}
        />
        {/* Label envolvendo input */}
        <label>
          {/* Simplificação de manipulação de state */}
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
