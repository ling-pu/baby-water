import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import X from "../assets/icons/icons/x.png";

const base = import.meta.env.BASE_URL;

const addBase = (path) => {
  if (!path) return "";
  return base + path.replace(/^\/+/, "");
};

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return; // 沒商品就不跳轉
    navigate("/checkout", { state: { items: cartItems } });
    closeCart();
  };

  return (
    <div className="cart-drawer open">
      <div className="cart-drawer-overlay" onClick={closeCart}></div>
      <div className="cart-drawer-panel" onClick={e => e.stopPropagation()}>
        {/* <button className="close-btn" onClick={closeCart}>×</button> */}
        <h2>購物車商品</h2>

        <div className="showProgress-stoke">
          <div className="showProgress-solid"></div>
        </div>

        <div className="content">
          <div className="total">
            <p>全部商品（<span>{totalQuantity}</span> 件）</p>
            <p>NT$ <span>{totalPrice.toLocaleString()}</span></p>
          </div>

          {/* 商品列表 */}
          {cartItems.map((item, index) => (
            <div key={index} className="buyItemCard">

              <div>
                <div className="col">
                  <img src={addBase(item.image)} alt={item.title} className="pic-s" />
                </div>
                <div className="info">
                  <p>{item.title}</p>
                  {/* <div>
                    <p>款式：{item.style}</p>
                    <p>尺寸：{item.size}</p>
                    <p>數量：{item.quantity}</p>
                  </div> */}


                </div>
              </div>

              {/* 總金額＆刪除按鈕區 */}
              <div>
              <p>NT$ <span>{(item.price * item.quantity).toLocaleString()}</span></p>

              <button onClick={() => removeFromCart(index)}
                style={{ cursor: 'pointer' }}>
                <img src={X} alt="" />
              </button>
              </div>


            </div>
          ))}

          {/* 結帳按鈕 */}
          {cartItems.length > 0 && (
            <div className="checkout-btn-area">
              <button onClick={handleCheckout}>前往結帳</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// import React, { useEffect } from 'react';

// export default function CartDrawer({ isOpen, onClose }) {
//     // 按鍵關閉視窗
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (e.key === 'Escape') {
//                 onClose();
//             }
//         };
//         if (isOpen) {
//             window.addEventListener('keydown', handleKeyDown);
//         }
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [isOpen]);

//     // 點擊視窗外關閉
//     useEffect(() => {
//         const handleEsc = (e) => {
//             if (e.key === "Escape") {
//                 onClose();
//             }
//         };
//         if (isOpen) {
//             window.addEventListener("keydown", handleEsc);
//         }
//         return () => window.removeEventListener("keydown", handleEsc);
//     }, [isOpen, onClose]);

//     if (!isOpen) return null;

//     return (
//         <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
//             <div className="cart-drawer-overlay" onClick={onClose}></div>
//             {/* 顯示購物車 */}
//             {isOpen && (
//                 <div className="cart-drawer">
//                     <div className="cart-drawer-overlay" onClick={onClose}></div>
//                     {/* 阻止點擊內部時觸發關閉 */}
//                     <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()} >
//                         <button className="close-btn" onClick={onClose}>×</button>
//                         {/* 標題 */}
//                         <h2>購物車商品</h2>
//                         {/* 進度條 */}
//                         <div className="showProgress-stoke">
//                             <div className="showProgress-solid"></div>
//                         </div>
//                         {/* 內容區 */}
//                         <div className="content">
//                             <div className='total'>
//                                 <p>全部商品（<span>2</span>件）</p>
//                                 <p>NT$ <span>2,040</span></p>
//                             </div>
//                             {/* 卡片 */}
//                             <div className='buyItemCard'>
//                                 <div className="col">
//                                     <img src="/images/tops/1/1.jpg" alt="" className="pic-s" />
//                                 </div>
//                                 <p>NT$ <span>2,040</span></p>

//                             </div>
//                         </div>

//                         <p>這裡顯示購物車內容</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }