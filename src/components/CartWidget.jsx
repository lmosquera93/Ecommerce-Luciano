import cart from "../assets/cart4.svg";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="Cart" className="cart-icon"/>
      <span className="number-cart">89</span>
    </>
  );
};
