// src/component/checkout/Step1Cart.jsx
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import ProgressBar from "./ProgressBar";
const base = import.meta.env.BASE_URL;

const addBase = (path) => {
  if (!path) return "";
  return base + path.replace(/^\/+/, "");
};


export default function Step1Cart({ onNext }) {
  const { cartItems, removeFromCart } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (cartItems.length === 0) {
    return <h2>購物車是空的</h2>;
  }

  useEffect(() => {
    window.scrollTo(0, 0); // 捲動到頁面頂部
  }, []);

  return (
    <>
      <main className="checkout">
        <ProgressBar />
        {/* 購物車標題 */}
        <section className="cart-title">
          {/* 左 */}
          <div className="title-l">
            <p>全部商品 ( <span> 4 </span> 件 )</p>
          </div>
          {/* 右 */}
          <div className="title-r">
            <p>總金額</p>
            <p className="price">NT$ <span>4,080</span> </p>
          </div>

        </section>
        {/* 購物車內容 */}
        <section className="cart-list">
          {/* 卡片 */}
          <div className="cart-buyItemCard">
            <img src="" alt="" className="pic-s" />

          </div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-buyItem">
              <img src={addBase(item.image)} alt={item.title} className="pic-s" />
              <div className="info">
                {/* 產品名稱 */}
                <p className="title">{item.title}</p>
                {/* 其他文字 */}
                <p className="else">款式：{item.style}</p>
                <p className="else">尺寸：{item.size}</p>
                {/* <p>數量：{item.quantity}</p> */}
                <div className="item-number">
                  <button >−</button>
                  <div className="number-area">
                    <span>{item.quantity}</span>
                  </div>
                  <button >＋</button>
                </div>
                {/* <p>單價：NT$ {item.price.toLocaleString()}</p> */}

              </div>
              {/* 金額 */}
              <p>NT$ <span>{(item.price * item.quantity).toLocaleString()}</span></p>
              {/* 刪除按鈕 */}
              <button onClick={() => removeFromCart(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <g clip-path="url(#clip0_1035_1583)">
                    <path d="M15 8.21476L10 13.2148M10 8.21476L15 13.2148M17.5 4.0481H6.66671L0.833374 10.7148L6.66671 17.3814H17.5C17.9421 17.3814 18.366 17.2058 18.6786 16.8933C18.9911 16.5807 19.1667 16.1568 19.1667 15.7148V5.71476C19.1667 5.27273 18.9911 4.84881 18.6786 4.53625C18.366 4.22369 17.9421 4.0481 17.5 4.0481Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1035_1583">
                      <rect width="20" height="20" fill="white" transform="translate(0 0.714844)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          ))}
        </section>

      </main>


    </>

  );
}

// <div className="step1-cart">
// <h2>🛒 購物車</h2>

// {cartItems.map((item, index) => (
//   <div key={index} className="cart-item">
//     <img src={item.image} alt={item.title} className="thumb" />
//     <div className="info">
//       <p><strong>{item.title}</strong></p>
//       <p>款式：{item.style}</p>
//       <p>尺寸：{item.size}</p>
//       <p>數量：{item.quantity}</p>
//       <p>單價：NT$ {item.price.toLocaleString()}</p>
//       <p>小計：NT$ {(item.price * item.quantity).toLocaleString()}</p>
//       <button onClick={() => removeFromCart(index)}>刪除</button>
//     </div>
//   </div>
// ))}

// <div className="summary">
//   <p>共 {totalQuantity} 件商品，總金額：NT$ {totalPrice.toLocaleString()}</p>
// </div>

// <div className="actions">
//   <button className="next-btn" onClick={onNext}>下一步：填寫資料</button>
// </div>
// </div>
