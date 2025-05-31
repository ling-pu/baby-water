// src/Pages/ProductPage.jsx
import { useParams } from "react-router-dom";
import { picks, world } from "../data/Data";
import { useState } from "react";
import Countdown from "../component/Countdown";

const base = import.meta.env.BASE_URL;
const addBase = (path) => (path ? base + path.replace(/^\/+/, "") : "");

export default function ProductPage() {
  const { id } = useParams();
  const allProducts = [...picks, ...world];
  const product = allProducts.find((p) => p.id === id);

  const [mainImg, setMainImg] = useState(product?.pic1 || "");

  if (!product) {
    return <h2>找不到此商品</h2>;
  }

  // 根據路徑對應標題文字
  const getTitleByPath = (path) => {
    if (path.startsWith("/japan")) return "日本代購";
    if (path.startsWith("/world")) return "世界選品";
    if (path.startsWith("/timesale")) return "每週超優惠";
    return "商品列表";
  };
  const title = getTitleByPath(location.pathname);

  return (
    <>
    {/* 標題區 */}
      <div className="ProductPage-title">
        <p>全部商品</p>
        <span>/</span>
        <p>{title}</p>
        <span>/</span>
        <p>{product.category}</p>
      </div>
      <div className="countdown">
      <Countdown endTime={product.endtime} />

      </div>

      <div>
        <h1>{product.title}</h1>

        {/* 主圖顯示 */}
        <img
          src={addBase(mainImg)}
          alt={product.title}
          style={{ width: "300px", marginBottom: "1rem" }}
        />

        <p>{product.price}</p>
        <p>款式：{product.style1} / {product.style2} / {product.style3}</p>

        {/* 小圖列 */}
        <div style={{ display: "flex", gap: "10px", marginTop: "1rem", width: "300px" }}>
          {product.pic1 && (
            <img
              src={addBase(product.pic1)}
              alt="pic1"
              width="80"
              onClick={() => setMainImg(product.pic1)}
              style={{ cursor: "pointer", border: mainImg === product.pic1 ? "2px solid black" : "none" }}
            />
          )}
          {product.pic2 && (
            <img
              src={addBase(product.pic2)}
              alt="pic2"
              width="80"
              onClick={() => setMainImg(product.pic2)}
              style={{ cursor: "pointer", border: mainImg === product.pic2 ? "2px solid black" : "none" }}
            />
          )}
          {product.pic3 && (
            <img
              src={addBase(product.pic3)}
              alt="pic3"
              width="80"
              onClick={() => setMainImg(product.pic3)}
              style={{ cursor: "pointer", border: mainImg === product.pic3 ? "2px solid black" : "none" }}
            />
          )}
        </div>
      </div>
    </>

  );
}
