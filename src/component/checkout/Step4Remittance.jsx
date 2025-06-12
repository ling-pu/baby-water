import { useState } from "react";
import ProgressBar from "./ProgressBar";
const base = import.meta.env.BASE_URL;

const addBase = (path) => {
  if (!path) return "";
  return base + path.replace(/^\/+/, "");
};

export default function Step4Remittance({ orderId = "SA2500001", amount = 4080, onNext, onBack }) {

  // 取得今天與今天+3天日期字串，格式：YYYY-MM-DD
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const plus3 = new Date(today);
  plus3.setDate(today.getDate() + 3);
  const plus3Str = plus3.toISOString().slice(0, 10);

  // 匯款通知表單狀態
  const [formData, setFormData] = useState({
    orderId,
    amount,
    last5: "",
    date: todayStr,
    payer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 這裡可以放送出匯款通知的邏輯
    alert("匯款通知已送出，感謝您的付款！");
  };

  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess("已複製帳號！");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <>
      <main className="checkout">
        <ProgressBar currentStep={4} />

        <div className="main-area">
          <div className="step-4">
            <h2>匯款通知與付款資訊</h2>
            <p>
              請您於 <strong>{todayStr}</strong> 至 <strong>{plus3Str}</strong> 期間完成匯款，並填寫匯款通知表單。<br />
              我們將於確認款項後儘速寄出商品，並透過 Email 通知您，感謝您的訂購！
            </p>

            <div className="container">
              <section className="payment-info">
                <div className="title">
                  <h3>付款帳戶</h3>
                  <button className="copy-btn" type="button" onClick={() => copyToClipboard("0000-0000-0000-0000")}>
                    點我複製
                  </button>
                </div>

                <p>銀行名稱｜ＸＸ商業銀行</p>
                <p>分行名稱｜台北城中分行</p>
                <p>銀行代碼｜123</p>
                <p>帳戶名稱｜水寶</p>
                <p>帳號｜0000-0000-0000-0000</p>
              </section>

              <section className="remittance-form">
                <h3>匯款通知表單</h3>
                <form onSubmit={handleSubmit}>
                  <div className="customer">
                    <label>
                      訂單編號*</label>
                    <input
                      type="text"
                      name="orderId"
                      value={formData.orderId}
                      readOnly
                    />

                  </div>

                  <div className="customer">
                    <label>
                      匯款金額*</label>
                    <input
                      type="number"
                      name="amount"
                      value={Number(formData.amount).toLocaleString()}
                      readOnly
                    />

                  </div>
                  <div className="customer">
                    <label>
                      匯款末5碼*</label>
                    <input
                      type="text"
                      name="last5"
                      maxLength={5}
                      value={formData.last5}
                      onChange={handleChange}
                      placeholder="請輸入匯款帳號末五碼"
                      required
                    />

                  </div>
                  <div className="customer">
                    <label>
                      匯款時間*</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      max={plus3Str}
                      min={todayStr}
                      onChange={handleChange}
                      required
                    />

                  </div>
                  <div className="customer">
                    <label>
                      匯款人姓名*</label>
                    <input
                      type="text"
                      name="payer"
                      value={formData.payer}
                      onChange={handleChange}
                      placeholder="請輸入匯款人姓名"
                      required
                    />

                  </div>

                  <button type="submit" className="submit-btn">完成匯款</button>
                </form>
              </section>

            </div>

            <div className="note">
              <p className="note-p">
                註：視窗關閉後可於訂單追蹤查看，並再次開啟匯款通知表單。
              </p>
              <a className="view-order-btn" href={addBase("/user")}
              style={{color: "#7C91AF", textDecoration: "underline"}}>前往查看訂單</a>
            </div>
            <p className="reminder">
                提醒您訂單編號可於訂單查詢頁面查詢訂單進度。
              </p>


          </div>


        </div>

      </main>
    </>

  );
}