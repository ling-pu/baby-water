// src/component/checkout/Step2Shipping.jsx
import React, { useState } from "react";



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
    <div className="checkout-step">
      <h2>填寫資料</h2>
      <form onSubmit={handleSubmit} className="shipping-form">
        <div>
          <label>姓名：</label>
          <input
            type="text"
            name="name"
            value={shippingInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>電話：</label>
          <input
            type="tel"
            name="phone"
            value={shippingInfo.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>地址：</label>
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email：</label>
          <input
            type="email"
            name="email"
            value={shippingInfo.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="button" onClick={onBack}>上一步</button>
          <button type="submit">下一步</button>
        </div>
      </form>
    </div>
  );
}
