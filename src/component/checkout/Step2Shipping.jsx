// src/component/checkout/Step2Shipping.jsx
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

export default function Step2Shipping({ shippingInfo, setShippingInfo, onBack, onNext }) {

  const [sameAsCustomer, setSameAsCustomer] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);
  // 7-11
  const [location, setLocation] = useState({ city: '台北市', town: '松山區' });

  // 表單
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormSubmitted(false); // 一旦修改內容，取消送出狀態
  };

  const handleRecipientChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      recipient: {
        ...prev.recipient,
        [name]: value,
      },
    }));
    setFormSubmitted(false); // 一旦修改內容，取消送出狀態
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSameAsCustomer(checked);

    if (checked) {
      setShippingInfo((prev) => ({
        ...prev,
        recipient: {
          name: prev.name,
          phone: prev.phone,
        },
      }));
    } else {
      setShippingInfo((prev) => ({
        ...prev,
        recipient: {
          name: "",
          phone: "",
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.lineId || !shippingInfo.email || !shippingInfo.shippingtype || !shippingInfo.payMethod) {
      alert("請完整填寫所有欄位，我們才能為您順利出貨唷！");
      return;
    }

    if (shippingInfo.shippingtype === '7-11純取貨' && !shippingInfo.storeCode) {
      alert("請選擇一間取貨的 7-11 門市，謝謝您！");
      return;
    }

    if (!shippingInfo.recipient?.name || !shippingInfo.recipient?.phone) {
      alert("請填寫收件人的姓名與電話，讓我們可以正確聯繫您！");
      return;
    }

    const confirmed = window.confirm("請再次確認您的收件資訊是否正確。\n若無誤，我們將會幫您送出訂單資料。");
    if (confirmed) {
      alert("感謝您，我們已收到您的資訊，即將前往下一步！");
      setFormSubmitted(true); // ✅ 表示送出成功
    }
  };

  // 選擇7-11門市
  // 地區選單改變時觸發
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  // 門市選擇後回寫到 shippingInfo
  const handleStoreChange = (store) => {
    setShippingInfo((prev) => ({
      ...prev,
      storeCode: store.storeCode,
      storeName: store.storeName,
      storeAddress: store.storeAddress,
    }));
  };


  return (
    <>
      <main className="checkout">

        <ProgressBar currentStep={2}/>

        <div className="main-area">

          <div className="step-2">
            {/* 左 表單區 */}
            <div className="form-area">

              <form id="shippingForm" onSubmit={handleSubmit} className="shipping-form">
                <h2>訪客購買</h2>
                <div className="customer">
                  <label>顧客名稱*</label>
                  <input
                    type="text"
                    name="name"
                    value={shippingInfo.name}
                    onChange={handleChange}
                    required
                    placeholder="例：王小明"
                  />
                </div>

                <div className="customer">
                  <label>電子信箱*</label>
                  <input
                    type="email"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleChange}
                    required
                    placeholder="例：example@gmail.com"
                  />
                </div>

                <div className="customer">
                  <label>Line ID*</label>
                  <input
                    type="text"
                    name="lineId"
                    value={shippingInfo.lineId || ""}
                    onChange={handleChange}
                    required
                    placeholder="例：ming123 或手機號碼"
                  />
                </div>

                <div className="customer">
                  <label>電話號碼*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleChange}
                    required
                    placeholder="例：0912345678"
                  />
                </div>

                {/* 送貨方式 */}

                <div className="customer">
                  <label>送貨方式*</label>
                  <select
                    name="shippingtype"
                    value={shippingInfo.shippingtype}
                    onChange={handleChange}
                    required
                    className="custom-select"
                  >
                    <option value="" disabled hidden>請選擇送貨方式</option>
                    <option value="7-11純取貨">7-11 純取貨</option>
                  </select>
                </div>

                {/* 選擇門市 */}
                {shippingInfo.shippingtype === '7-11純取貨' && (
                  <div className="customer">
                    <label>門市選擇*</label>
                    <div className="store7-11">
                      {/* 按鈕 + 已選門市顯示 */}
                      <button
                        className="store-select-btn"
                        type="button"
                        onClick={() => {
                          // TODO: 這裡串接綠界選擇門市的 API（iframe or window.open）
                          // 範例模擬選擇門市
                          const mockStore = {
                            storeCode: "0001",
                            storeName: "松山大店",
                            storeAddress: "台北市松山區光復北路100號"
                          };
                          setShippingInfo((prev) => ({
                            ...prev,
                            ...mockStore
                          }));
                        }}
                      >
                        選擇門市
                      </button>

                      {shippingInfo.storeCode && (
                        <div className="store-info">
                          <p>已選擇門市：</p>
                          <p>{shippingInfo.storeName}</p>
                          <p>{shippingInfo.storeAddress}</p>
                        </div>
                      )}
                    </div>

                  </div>
                )}

                {/* 收件人資料 */}
                <h3 >收件人資訊</h3>
                <div className="customer">
                  <label className="checkbox-area">
                    <input
                      type="checkbox"
                      checked={sameAsCustomer}
                      onChange={handleCheckboxChange}
                    />
                    收件人資料與顧客資料相同
                  </label>
                </div>
                <div className="customer">
                  <label>收件人姓名*</label>
                  <input
                    type="text"
                    name="name"
                    value={shippingInfo.recipient?.name || ""}
                    onChange={handleRecipientChange}
                    required
                    disabled={sameAsCustomer}
                  />
                </div>
                <div className="customer">
                  <label>收件人電話*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingInfo.recipient?.phone || ""}
                    onChange={handleRecipientChange}
                    required
                    disabled={sameAsCustomer}
                  />
                </div>

                <div className="customer">
                  <label>付款方式*</label>
                  <select
                    name="payMethod"
                    value={shippingInfo.payMethod}
                    onChange={handleChange}
                    required
                    className="custom-select"
                  >
                    <option value="" disabled hidden>請選擇付款方式</option>
                    <option value="銀行匯款">銀行匯款</option>
                  </select>
                </div>

                <button
                  type="submit"
                  form="shippingForm"
                  className={`submit-btn ${formSubmitted ? 'submitted' : ''}`}
                >
                  {formSubmitted ? "資料已送出" : "感謝您的填寫，點我送出訂單資料"}
                </button>
                {formSubmitted && <p className="success-message">✔️ 已確認收件資訊，請點選下一步</p>}


              </form>

              {/* 右 登入會員區 */}
              <div className="member-area">
                <div className="customer">
                  <p>已有帳號嗎？登入會員可查詢訂單進度與歷史記錄喔！</p>
                </div>
                <button>立即登入</button>
              </div>
            </div>
          </div>

        </div>

        {/*  按鈕 */}

        <div className="btn-area">
          <button className="pre-btn" type="button" onClick={onBack}>上一步</button>
          <button
            className="next-btn"
            onClick={() => {
              if (formSubmitted) {
                onNext();
              } else {
                alert("請先填寫並送出表單，我們才能為您進行下一步喔！");
              }
            }}
            disabled={!formSubmitted}
          >
            下一步
          </button>
        </div>



      </main>
    </>

  );
}


