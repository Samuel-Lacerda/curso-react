const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Esse é o titulo do container</h2>
      {children}
      <h3>O valor é: {myValue}</h3>
    </div>
  );
};

export default Container;
