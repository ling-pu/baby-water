// src/component/checkout/Step2Shipping.jsx
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";



export default function Step2Shipping({ shippingInfo, setShippingInfo, onBack, onNext }) {


  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 簡單驗證（可擴充）
    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.address || !shippingInfo.email) {
      alert("請填寫所有欄位");
      return;
    }
    onNext(); // 進入下一步
  };

  return (
    <>
      <main className="checkout">

        <ProgressBar />

        <div className="main-area">

          <div className="step-2">
            {/* 左 表單區 */}
            <div className="form-area">

              <form onSubmit={handleSubmit} className="shipping-form">
                <h2>訪客購買</h2>
                <div className="customer">
                  <label>顧客名稱*</label>
                  <input
                    type="text"
                    name="name"
                    value={shippingInfo.name}
                    onChange={handleChange}
                    required
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
                  />
                </div>

                <div className="customer">
                  <label>Line ID*</label>
                  <input
                    type="text"
                    name="name"
                    value={shippingInfo.name}
                    onChange={handleChange}
                    required
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
                  />
                </div>
              </form>

              {/* 右 登入會員區 */}
              <div className="member-area">
                <div className="customer">
                  <p>登入後可以更方便管理訂單！</p>
                </div>
                <button>會員購買</button>
              </div>
            </div>
          </div>

        </div>

        {/*  按鈕 */}

        <div className="btn-area">
          <button className="pre-btn" type="button" onClick={onBack}>上一步</button>
          <button className="next-btn" onClick={onNext}>下一步：確認資料</button>
        </div>



      </main>
    </>

  );
}


