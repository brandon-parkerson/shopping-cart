import { useOutletContext } from "react-router-dom";
import "./Cart.css";


export default function Cart() {
  const { cartItems, setCartItems, numItems, setNumItems } = useOutletContext();
    
  function Total() {
    let total = 0
    cartItems.map((item) => {
        total = total + item.price;
    })
    return (
        <h3>${total}</h3>
    )
  }

  function handleRemove(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setNumItems(numItems - 1);
  }

  return (
    <div className="cart-page">
      
      <h2 className="cart-title">Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="cart-empty-text">Cart is empty</p>
      ) : (
        cartItems.map((item) => (
            <div key={item.id} className="item">
                <img src={item.image} className="cart-item-img" />
                <div>{item.title}</div>
                <p>${item.price}</p> 
                <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>

        ))
      )}
      <h2>Total</h2>
      <Total />
      
      
    </div>
    
  );
}
