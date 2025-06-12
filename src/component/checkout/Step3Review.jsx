import ProgressBar from "./ProgressBar";

export default function Step3Review({ onNext, onBack }) {
  return (
    <>
      <main className="checkout">
        <ProgressBar />
        <div className="main-area">
          <div className="step-3">

            <main className="checkout">
              <div className="main-area">
                <h2>明細確認</h2>

                {/* 購物明細 */}
                <section className="review-section">
                  <h3>🛒 購物清單</h3>
                  <ul className="cart-summary">
                    {cartItems.map((item, index) => (
                      <li key={index}>
                        <strong>{item.name}</strong> x {item.quantity} — NT${item.price * item.quantity}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 使用者填寫資訊 */}
                <section className="review-section">
                  <h3>📦 訂購人與送貨資訊</h3>
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
                  <h3>📩 收件人資訊</h3>
                  <p><strong>收件人姓名：</strong>{info.recipient?.name}</p>
                  <p><strong>收件人電話：</strong>{info.recipient?.phone}</p>
                </section>

                {/* 按鈕區 */}
                <div className="btn-area">
                  <button className="pre-btn" onClick={onBack}>上一步</button>
                  <button className="next-btn" onClick={onNext}>下一步：匯款上傳</button>
                </div>
              </div>
            </main>
            


          </div>
        </div>

      </main>
    </>

  );
}