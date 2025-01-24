const UserDetails = ({ users }) => {
  return (
    <div>
      {users.map((user, i) =>
        user.idade > 17 ? (
          <p key={i}>{user.nome} está apto(a) a tirar sua habilitação!</p>
        ) : (
          <p key={i}>
            Infelizmente, {user.nome} está impossíbilitado(a) de tirar sua
            habilitação.
          </p>
        )
      )}
    </div>
  );
  s;
};

export default UserDetails;
