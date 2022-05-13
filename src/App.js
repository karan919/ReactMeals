import { useState } from "react";
import AvailableMeals from "./Components/AvailableMeals";
import MealsSummary from "./Components/MealsSummary";
import Navbar from "./Components/Navbar";
import Meals from "./images/meals.jpg";
import { KartContextProvider } from "./Components/KartContext";
import Cart from "./Components/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <KartContextProvider>
      <Navbar showCartHandler={showCartHandler}/>
      <div className="main-image">
        <img src={Meals} alt="meal" />
      </div>
      <MealsSummary />
      <AvailableMeals />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </KartContextProvider>
  );
}

export default App;
