import AvailableMeals from "./Components/AvailableMeals";
import MealsSummary from "./Components/MealsSummary";
import Navbar from "./Components/Navbar";
import Meals from "./images/meals.jpg";
import KartContextProvider from "./Components/KartContext";

function App() {
  return (
    <KartContextProvider>
      <Navbar />
      <div className="main-image">
        <img src={Meals} alt="meal" />
      </div>
      <MealsSummary />
      <AvailableMeals />
    </KartContextProvider>
  );
}

export default App;
