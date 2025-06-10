import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import X from "../assets/icons/icons/x.png";
import { useEffect, useRef, useState } from "react";

const base = import.meta.env.BASE_URL;

const addBase = (path) => {
  if (!path) return "";
  return base + path.replace(/^\/+/, "");
};

export default function CartDrawer() {

  const { isCartOpen, closeCart, cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  const drawerRef = useRef(null); // 用來偵測點擊是否在 drawer 內

  // 提示訊息
  const [message, setMessage] = useState("");
  const handleRemove = (item) => {
    removeFromCart(item);
    setMessage(`已移除「${item.title}」`);
    setTimeout(() => setMessage(""), 2000);
  };
  if (typeof removeFromCart !== "function") {
    console.warn("removeFromCart 尚未定義");
    return;
  }
  // 點擊 drawer 外部就關閉
  useEffect(() => {
    if (!isCartOpen) return;

    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return; // 沒商品就不跳轉
    navigate("/checkout", { state: { items: cartItems } });
    closeCart();
  };


  // ⬇️ 點擊跳轉到 /product/:id
  const handleClick = (id) => {
    if (id) navigate(`/product/${id}`);
  };


  return (
    <>
    {/* 加入 ref={drawerRef} 會導致無法按刪除 */}
      {isCartOpen && (
        <div className="cart-drawer open"  onClick={e => e.stopPropagation()}>
          <div className="cart-drawer-panel" >
            <h2>購物車商品</h2>

            {/* 已刪除的提示 */}
            {message && (
              <div className="cart-message">
                {message}
              </div>
            )}

            <div className="showProgress-stoke">
              <div className="showProgress-solid"></div>
            </div>

            <div className="content">
              <div className="total">
                <p>全部商品（<span>{totalQuantity}</span> 件）</p>
                <p>NT$ <span>{totalPrice.toLocaleString()}</span></p>
              </div>

              {/* 商品列表 */}
              <tbody>
                {Array.isArray(cartItems) && cartItems.length > 0 && cartItems.map((item) => (
                  <tr key={`${item.id}-${item.style}-${item.size}`} className="buyItemCard">

                    <div>
                      <td className="col">
                        <img src={addBase(item.image)} alt={item.title} className="pic-s"
                          onClick={() => handleClick(item.id)}
                          style={{ cursor: "pointer" }} />
                      </td>
                      <td className="info">
                        <p className="title" onClick={() => handleClick(item.id)}
                          style={{ cursor: "pointer" }}
                        >{item.title}</p>
                        <div>
                          <p>款式：{item.style}</p>
                          <p>尺寸：{item.size}</p>
                          <p>數量：{item.quantity}</p>
                        </div>


                      </td>
                    </div>

                    {/* 總金額＆刪除按鈕區 */}
                    <div>
                      <td className="item-price">
                        <p>NT$ <span>{(item.price * item.quantity).toLocaleString()}</span></p>
                      </td>
                      <td>
                        <button
                          onClick={() => handleRemove(item)}
                          style={{ cursor: "pointer", border: "none", background: "none" }}
                        >
                          <img src={X} alt="移除" style={{ width: "14px" }} />
                        </button>
                      </td>

                    </div>



                  </tr>
                ))}
              </tbody>


              {/* 結帳按鈕 */}
              {cartItems.length > 0 && (
                <div className="checkout-btn-area">
                  <button onClick={handleCheckout} style={{ cursor: "pointer" }}>
                    前往結帳
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </>
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