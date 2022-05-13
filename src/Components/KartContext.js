import { createContext, useState, useEffect } from "react";
import { dummyMeals } from "./dummy-meals";

const KartContext = createContext({
  availableMeals: {},
  updateAvailableMeals: () => {},
});

export const KartContextProvider = (props) => {
  const [meals, setMeals] = useState(dummyMeals);
  const [itemSum, setItemSum] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateMeals = (id, value) => {
    setItemSum(itemSum + Number(value));
    let temp = meals.map((meal) => {
      if (meal.id === id) {
        return {
          ...meal,
          amount: meal.amount + value,
        };
      }
      return meal;
    });
    setMeals(temp);
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < meals.length; i++) {
      sum += meals[i].amount * meals[i].price;
    }
    setTotalPrice(sum);
  }, [meals]);
  
  return (
    <KartContext.Provider
      value={{
        availableMeals: meals,
        updateAvailableMeals: updateMeals,
        itemSum,
        totalPrice,
      }}
    >
      {props.children}
    </KartContext.Provider>
  );
};

export default KartContext;
