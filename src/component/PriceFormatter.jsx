import React from "react";

export default function PriceFormatter({ price }) {
  const formatPrice = (priceStr) => {
    if (!priceStr) return "";

    // 先把字串中的非數字、非小數點符號清除（保留數字與小數點）
    const number = parseFloat(String(priceStr).replace(/[^\d.]/g, ""));
    if (isNaN(number)) return "";

    // 用 Intl.NumberFormat 加千分位
    const formattedNumber = new Intl.NumberFormat("zh-TW", {
      minimumFractionDigits: 0,
    }).format(number);

    return `NT$ ${formattedNumber}`;
  };

  return <>{formatPrice(price)}</>;
}