import ProgressBar from "./ProgressBar";

const base = import.meta.env.BASE_URL;

const addBase = (path) => {
  if (!path) return "";
  return base + path.replace(/^\/+/, "");
};

export default function Step3Review({ cartItems, info, onNext, onBack }) {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <main className="checkout">
      <ProgressBar />
      <div className="main-area">
        <div className="step-3">
          <div className="review-area">
            
            {/* 左 顧客資料明細 */}
            <div className="review-customer">
              {/* 使用者填寫資訊 */}
              <section className="review-section">
                <h3>訂購人與送貨資訊</h3>
                <p><strong>顧客姓名：</strong>{info.name}</p>
                <p><strong>電子信箱：</strong>{info.email}</p>
                <p><strong>Line ID：</strong>{info.lineId}</p>
                <p><strong>電話號碼：</strong>{info.phone}</p>
                <p><strong>送貨方式：</strong>{info.shippingtype}</p>

                {info.shippingtype === "7-11純取貨" && (
                  <>
                    <p><strong>7-11 門市：</strong>{info.storeName}</p>
                    <p><strong>門市地址：</strong>{info.storeAddress}</p>
                  </>
                )}

                <p><strong>付款方式：</strong>{info.payMethod}</p>
              </section>

              {/* 收件人資訊 */}
              <section className="review-section">
                <h3>收件人資訊</h3>
                <p><strong>收件人姓名：</strong>{info.recipient?.name}</p>
                <p><strong>收件人電話：</strong>{info.recipient?.phone}</p>
              </section>

            </div>

            {/* 右 購物明細 */}
            <div className="review-cart">
              <section className="cart-title">
                <div className="title-l">
                  <h3>全部商品 (<span>{totalQuantity}</span> 件)</h3>
                </div>
                <div className="title-r">
                  <p>總金額</p>
                  <p className="price">NT$ <span>{totalPrice.toLocaleString()}</span></p>
                </div>
              </section>

              <section className="cart-list">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-buyItem">
                    <img src={addBase(item.image)} alt={item.title} className="pic-s" />
                    <div className="info">
                      <p className="title">{item.title}</p>
                      <p className="else">款式：{item.style}</p>
                      <p className="else">尺寸：{item.size}</p>
                      <p className="else">數量：{item.quantity}</p>
                      {/* <p>單價：NT$ {item.price.toLocaleString()}</p> */}
                    </div>
                    <p>NT$ <span>{(item.price * item.quantity).toLocaleString()}</span></p>
                  </div>
                ))}
              </section>
            </div>
          </div>

        </div>
      </div>

      {/* 按鈕區 */}
      <div className="btn-area">
        <button className="pre-btn" onClick={onBack}>上一步</button>
        <button className="next-btn" onClick={onNext}>下一步</button>
      </div>
    </main>


  );
}
