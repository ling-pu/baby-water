// src/pages/CheckoutPage.jsx
import { useLocation } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const items = location.state?.items || [];

  return (
    <div>
      <h1>結帳頁面</h1>
      {items.length === 0 ? (
        <p>購物車是空的</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <p>{item.title} × {item.quantity}</p>
            <p>價格：NT$ {(item.price * item.quantity).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}
