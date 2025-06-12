import React, { useEffect, useState } from "react";

const mockStores = {
  台北市: {
    松山區: [
      { code: "0001", name: "松山大店", address: "台北市松山區光復北路100號" },
      { code: "0002", name: "松山小店", address: "台北市松山區南京東路200號" },
    ],
    信義區: [
      { code: "0003", name: "信義旗艦店", address: "台北市信義區市府路1號" },
    ],
  },
};

export default function MockSevenElevenStoreSelector({
  city,
  town,
  storeCode,
  onStoreChange,
}) {
  const [selected, setSelected] = useState(storeCode || "");

  const stores = mockStores[city]?.[town] || [];

  const handleChange = (e) => {
    const code = e.target.value;
    setSelected(code);
    const store = stores.find((s) => s.code === code);
    if (store) {
      onStoreChange({
        storeCode: store.code,
        storeName: store.name,
        storeAddress: store.address,
      });
    }
  };

  return (
    <div className="customer">
      <label>選擇 7-11 門市*</label>
      <select value={selected} onChange={handleChange} required>
        <option value="">請選擇門市</option>
        {stores.map((store) => (
          <option key={store.code} value={store.code}>
            {store.name} - {store.address}
          </option>
        ))}
      </select>
    </div>
  );
}
