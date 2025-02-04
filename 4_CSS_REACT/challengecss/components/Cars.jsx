import styles from "./Cars.module.css";

const Cars = ({ cars }) => {
  return (
    <div>
      <ul>
        {cars.map((car, index) => (
          <li
            key={index}
            className={car.cor === "Vermelho" ? styles.vermelho : null}
          >
            {car.modelo} - {car.cor} - {car.fabricante}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
