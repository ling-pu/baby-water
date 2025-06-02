// src/Pages/ProductPage.jsx
import { useParams } from "react-router-dom";
import { picks, world } from "../data/Data";
import { useState } from "react";
import Countdown from "../component/Countdown";
import PriceFormatter from "../component/PriceFormatter";
import Card from "../component/Card";

const base = import.meta.env.BASE_URL;
const addBase = (path) => (path ? base + path.replace(/^\/+/, "") : "");

export default function ProductPage() {
  const { id } = useParams();
  const allProducts = [...picks, ...world];
  const product = allProducts.find((p) => p.id === id);

  const [mainImg, setMainImg] = useState(product?.pics?.[0] || "");

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

  // 樣式顏色（圖片）
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = (index) => {
    setSelectedIndex(index);
    setMainImg(product.pics[index]);
  };
  // 尺寸
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  // 件數
  const [quantity, setQuantity] = useState(1); // 預設 1 件

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleSubtract = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  // 加入購物車
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.pics[selectedIndex],
      style: product.styles[selectedIndex],
      size: product.sizes[selectedSizeIndex],
      quantity,
    };
    alert(`已加入購物車：
      商品：${cartItem.title}
      款式：${cartItem.style}
      尺寸：${cartItem.size}
      件數：${cartItem.quantity}`);
  };
  // 處理立即購買
  const handleBuyNow = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.pics[selectedIndex],
      style: product.styles[selectedIndex],
      size: product.sizes[selectedSizeIndex],
      quantity,
    };

    // 前往結帳頁，並傳遞資料
    navigate("/checkout", { state: { item: cartItem } });
  };


  return (
    <>
      <main id="product-page">
        {/* 標題區 */}
        <div className="ProductPage-title">
          <div>
            <p>全部商品</p>
            <span>/</span>
            <p>{title}</p>
            <span>/</span>
            <p>{product.category}</p>
          </div>

          {/* 倒數 */}
          <div className="countdown">
            <Countdown endTime={product.endtime} />
          </div>
        </div>

        <div className="ProductPage-item">
          {/* 主要內容 */}
          <div className="ProductPage-row1">

            <div className="pic">
              {/* 主圖＆圖片頁籤 */}
              {/* 大圖 */}
              <img
                src={addBase(mainImg)}
                alt={product.title}
              />
              {/* 小圖列 */}
              <div className="pic-sm">
                {product.pics.map((pic, index) => (
                  <img
                    key={index}
                    src={addBase(pic)}
                    alt={`pic${index + 1}`}
                    width="80"
                    onClick={() => setMainImg(pic)}
                    style={{
                      cursor: "pointer",
                      border: mainImg === pic ? "2px solid black" : "none"
                    }}
                  />
                ))}
              </div>

            </div>

            <div className="content">

              <h1>{product.title}</h1>
              {/* 價格 */}
              <div className="price">
                <PriceFormatter price={product.price} />
              </div>
              {/* 文字描述 */}
              <p className="content-description" style={{ whiteSpace: "pre-line" }}>{product.description}</p>
              {/* 選項區3組 */}
              <div className="item-options">
                <div className="option">
                  {/* 顯示已選顏色 */}
                  <p>已選款式：{product.styles[selectedIndex]}</p>
                  {/* 按鈕 */}
                  <div className="item-color">
                    {product.pics.map((pic, index) => (
                      <img
                        key={index}
                        src={addBase(pic)}
                        alt={`pic${index + 1}`}
                        width="80"
                        onClick={() => handleSelect(index)}
                        style={{
                          cursor: "pointer",
                          border: selectedIndex === index ? "2px solid black" : "none",
                        }}
                      />
                    ))}
                  </div>

                </div>
                <div className="option">
                  {/* 顯示已選尺寸 */}
                  <p>
                    已選尺寸：<strong>{product.sizes[selectedSizeIndex]}</strong>
                  </p>
                  {/* 按鈕 */}
                  <div className="item-size">
                    {product.sizes.map((size, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedSizeIndex(i)}
                        style={{
                          fontWeight: selectedSizeIndex === i ? "bold" : "normal",
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                </div>
                <div className="option item-number">
                  {/* 顯示已選數量 */}
                  <p>
                    已選擇：<strong>{quantity}</strong> 件
                  </p>
                  {/* 按鈕 */}
                  <div >
                    <p>件數：</p>
                    <div>
                      <button onClick={handleSubtract} style={{ width: "30px" }}>−</button>
                      <span>{quantity}</span>
                      <button onClick={handleAdd} style={{ width: "30px" }}>＋</button>
                    </div>

                  </div>
                </div>

              </div>

              {/* 加入購物車 */}
              <div className="add-to-cart-area">
                <button onClick={handleAddToCart}>加入購物車</button>
                <button onClick={handleBuyNow}>立即購買</button>
              </div>

            </div>


          </div>

          {/* 圖片展示區 */}
          <div className="pic-md-area">
            {/* 中圖 */}
            <div className="pic-md">
              {product.pics.map((pic, index) => (
                <img
                  key={index}
                  src={addBase(pic)}
                  alt={`pic${index + 1}`}
                  width="200"
                />
              ))}
            </div>
            {/* 文字欄 */}
            <div className="text-area">
              <p>商品說明</p>
              {product.sizeNote && (
                <div className="size-note">
                  <p style={{ whiteSpace: "pre-line" }}>{product.sizeNote}</p>
                </div>
              )}

            </div>


          </div>

        </div>



        {/* 其他 */}
        <div className="else">
          <p>您可能會喜歡</p>
          <div className="cardlist">
            {/* Picks卡片區 */}
            {picks.map((picks, index) => (
              <Card
                key={picks.id || index}
                id={picks.id} // ✅ 傳入 id
                imgSrc={picks.imgSrc}
                title={picks.title}
                price={picks.price}
                link={picks.link}
                pic1={picks.pic1}
                pic2={picks.pic2}
                pic3={picks.pic3}
              />
            ))}
          </div>
        </div>
      </main>
    </>

  );
}
