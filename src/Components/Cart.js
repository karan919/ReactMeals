import classes from "./Cart.module.css";
import Modal from "./Modal";
import KartContext from "./KartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const Kart = useContext(KartContext);
  let list = Kart.availableMeals.filter((meal) => {
    return meal.amount !== 0;
  });

  const handleOrder = () => {
    console.log("Ordering.......");
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-items"]}>
        {list.map((meal) => {
          return (
            <CartItem
              key={meal.id}
              name={meal.name}
              price={meal.price}
              amount={meal.amount}
              onAdd={() => Kart.updateAvailableMeals(meal.id, 1)}
              onRemove={() => Kart.updateAvailableMeals(meal.id, -1)}
            />
          );
        })}
      </div>
      <div className={classes.total}>
        <h2>Total Amount</h2>
        <div>$ {Number(Kart.totalPrice).toFixed(2)}</div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        <button className={classes.order} onClick={handleOrder}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
