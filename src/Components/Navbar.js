import CartIcon from "./CartIcon";
import "./Navbar.css";
import KartContext from "./KartContext";
import { useContext } from "react";

const Navbar = (props) => {
  const Kart = useContext(KartContext);

  const handleModal = () => {
    props.showCartHandler();
  };
  return (
    <div className="navbar">
      <h1>ReactMeals</h1>
      <div className="navbar-kart button" onClick={handleModal}>
        <div className="icon">
          <CartIcon />
        </div>
        Your Cart
        <div className="badge">{Kart.itemSum}</div>
      </div>
    </div>
  );
};

export default Navbar;
