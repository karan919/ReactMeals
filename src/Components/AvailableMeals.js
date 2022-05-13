import styles from "./AvailableMeals.module.css";
import { useContext } from "react";
import KartContext from "./KartContext";
import AvailableMealList from "./AvailableMealList";

const AvailableMeals = () => {
  const Kart = useContext(KartContext);
  return (
    <div className="card center">
      <div className={styles.meals}>
        <ul>
          {Kart.availableMeals.map((meal) => {
            return (
              <AvailableMealList key={meal.id} meal={meal} Kart={Kart}/>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AvailableMeals;
