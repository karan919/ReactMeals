import { createContext, useState } from "react";
import { dummyMeals } from "./dummy-meals";

const KartContext = createContext({
  availableMeals: {},
});

const KartContextProvider = (props) => {
    console.log(dummyMeals)
  return (
    <KartContext.Provider
      value={{
        availableMeals: dummyMeals,
      }}
    >
      {props.children}
    </KartContext.Provider>
  );
};

export default KartContextProvider;
