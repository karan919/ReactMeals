import styles from "./AvailableMeals.module.css";
import { useContext } from "react";
import KartContextProvider from "./KartContext";

const AvailableMeals = () => {
  const KartContext = useContext(KartContextProvider);
  console.log("ddd", KartContext.availableMeals);
  return (
    <div className="card center">
      <div className={styles.meals}>dsfdf</div>
    </div>
  );
};

export default AvailableMeals;