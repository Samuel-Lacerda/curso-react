import "./MyForm.css";

const MyForm = () => {
  return (
    <div>
      {/* Criação de Form */}
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" placeholder="Digite seu nome" />
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
