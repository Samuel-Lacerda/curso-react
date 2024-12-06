const TemplateExpresions = () => {
  const nome = "Samuel";
  const data = {
    age: 25,
    job: "Programmer",
  };

  return (
    <div>
      <h2>Olá {nome}, tudo bem?</h2>
      <p>Você atual como: {data.job}</p>
    </div>
  );
};

export default TemplateExpresions;
