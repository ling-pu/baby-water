// src/component/checkout/Step1Cart.jsx
import { useCart } from "../../context/CartContext";

export default function Step1Cart({ onNext }) {
  const { cartItems, removeFromCart } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (cartItems.length === 0) {
    return <h2>購物車是空的</h2>;
  }

  return (
    <div className="step1-cart">
      <h2>🛒 購物車</h2>

      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.title} className="thumb" />
          <div className="info">
            <p><strong>{item.title}</strong></p>
            <p>款式：{item.style}</p>
            <p>尺寸：{item.size}</p>
            <p>數量：{item.quantity}</p>
            <p>單價：NT$ {item.price.toLocaleString()}</p>
            <p>小計：NT$ {(item.price * item.quantity).toLocaleString()}</p>
            <button onClick={() => removeFromCart(index)}>刪除</button>
          </div>
        </div>
      ))}

      <div className="summary">
        <p>共 {totalQuantity} 件商品，總金額：NT$ {totalPrice.toLocaleString()}</p>
      </div>

      <div className="actions">
        <button className="next-btn" onClick={onNext}>下一步：填寫資料</button>
      </div>
    </div>
  );
}
