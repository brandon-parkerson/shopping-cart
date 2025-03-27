import { useOutletContext } from "react-router-dom";
import "./Cart.css";
import { CheckoutNav } from "./Nav";

export default function Cart() {
  const { cartItems } = useOutletContext();

  return (
    <>
      
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} className="item-img" />
            <div>{item.title}</div>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </>
  );
}
