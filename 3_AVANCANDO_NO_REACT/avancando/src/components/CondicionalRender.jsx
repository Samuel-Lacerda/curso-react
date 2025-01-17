import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(true);

  const [nome] = useState("João");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se isso for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <h1>If ternário</h1>
      {nome === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </div>
  );
};

export default CondicionalRender;
