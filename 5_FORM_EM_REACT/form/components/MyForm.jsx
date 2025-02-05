import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  // gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  console.log(name);

  return (
    <div>
      {/* Criação de Form */}
      <form>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={handleName}
        />
        {/* Label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
