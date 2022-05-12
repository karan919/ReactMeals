import CartIcon from "./CartIcon";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>ReactMeals</h1>
      <div>
        <CartIcon/>
        Cart
        </div>
    </div>
  );
};

export default Navbar;
