import { useState } from "react";

const ListRenderer = () => {
  const [list] = useState(["Matheus", "Pedro", "José", "Paulo"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Pedro", age: 35 },
    { id: 2, name: "João", age: 26 },
    { id: 3, name: "Henrique", age: 23 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <div>
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
    </div>
  );
};

export default ListRenderer;
