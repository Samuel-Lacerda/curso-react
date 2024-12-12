import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Jocias", "Maria"]);

  const [users] = useState([
    { id: 123, name: "Pedro", age: 35 },
    { id: 343, name: "João", age: 26 },
    { id: 675, name: "Henrique", age: 23 },
  ]);

  const deleteRandom = () => {
    const randomNumer = Math.floor(Math.random * 3);
    setUsers(())
  }

  return (
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
  );
};

export default ListRender;
