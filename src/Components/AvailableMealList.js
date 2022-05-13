import { useState } from "react";
import "./AvailableMealList.css";

const AvailableMealList = ({ meal, Kart }) => {
  const [amount, setAmount] = useState(1);
  return (
    <li key={meal.id} className="availableMeal-list meals-appear">
      <div>
        <h2>{meal.name}</h2>
        <p>{meal.description}</p>
        <div>$ {meal.price}</div>
      </div>
      <div>
        <div className="input-box">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            value={amount}
            min="0"
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        </div>
        <button
          className="add"
          onClick={() => Kart.updateAvailableMeals(meal.id, amount)}
          style={{cursor:"pointer"}}
        >
          ADD
        </button>
      </div>
    </li>
  );
};

export default AvailableMealList;
