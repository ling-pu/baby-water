// src/Pages/ProductPage.jsx
import { useLocation, useParams } from "react-router-dom";
import { picks, world } from "../data/Data";
import { useEffect, useState } from "react";
import Countdown from "../component/Countdown";
import PriceFormatter from "../component/PriceFormatter";
import Card from "../component/Card";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const base = import.meta.env.BASE_URL;
const addBase = (path) => (path ? base + path.replace(/^\/+/, "") : "");

export default function ProductPage() {

  useEffect(() => {
    window.scrollTo(0, 0); // 捲動到頁面頂部
  }, []);

  const location = useLocation();
  const { id } = useParams();
  const allProducts = [...picks, ...world];
  const product = allProducts.find((p) => p.id === id);

  const [mainImg, setMainImg] = useState(product?.pics?.[0] || "");

  const sizes = product?.sizes || ["F"]; // 預設有尺寸避免出錯

  // 判斷改成：
  if (
    !product ||
    !Array.isArray(product.pics) ||
    !Array.isArray(product.styles) ||
    !Array.isArray(sizes)
  ) {
    return <h2>商品資料不完整</h2>;
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
  const { addToCart, openCart } = useCart();
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
    addToCart(cartItem);
    openCart(); // ✅ 新增這行：點擊後開啟購物車抽屜
  };

  // 處理立即購買
  const navigate = useNavigate();

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

    // ✅ 傳陣列進結帳頁面
    navigate("/checkout", { state: { items: [cartItem] } });
  };

  useEffect(() => {
    if (product?.pics?.length > 0) {
      setMainImg(product.pics[0]);
      setSelectedIndex(0);
      setSelectedSizeIndex(0);
      setQuantity(1);
    }
  }, [id, product]);

  // console.log("商品資料", product);

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
                {Array.isArray(product.pics) &&
                  product.pics.map((pic, index) => (
                    <img
                      key={index}
                      src={addBase(pic)}
                      alt={`pic${index + 1}`}
                      onClick={() => setMainImg(pic)}
                      style={{
                        cursor: "pointer",
                        border: mainImg === pic ? "2px solid black" : "none"
                      }}
                    />
                  ))
                }
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
                    {Array.isArray(product.pics) &&
                      product.pics.map((pic, index) => (
                        <img
                          className="card"
                          key={index}
                          src={addBase(pic)}
                          alt={`pic${index + 1}`}
                          onClick={() => handleSelect(index)}
                          style={{
                            cursor: "pointer",
                            border: selectedIndex === index ? "2px solid black" : "none",
                          }}
                        />
                      ))
                    }


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
                        className="acitve card"
                        onClick={() => setSelectedSizeIndex(i)}
                        style={{ cursor: "pointer" }}
                      // style={{
                      //   fontWeight: selectedSizeIndex === i ? "bold" : "normal",
                      // }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                </div>
                <div className="option">
                  {/* 顯示已選數量 */}
                  <p>
                    已選數量：<strong>{quantity}</strong> 件
                  </p>
                  {/* 按鈕 */}
                  <div >
                    <div className="item-number">
                      <button className="card" onClick={handleSubtract} >−</button>
                      <div className="number-area">
                        <span>{quantity}</span>
                      </div>
                      <button className="card" onClick={handleAdd} >＋</button>
                    </div>

                  </div>
                </div>

              </div>

              {/* 加入購物車 */}
              <div className="add-to-cart-area">
                <button onClick={handleAddToCart} style={{ cursor: 'pointer' }}>加入購物車</button>
                <button onClick={handleBuyNow} style={{ cursor: 'pointer' }}>立即購買</button>
              </div>

            </div>


          </div>

          {/* 圖片展示區 */}
          <div className="pic-md-area">
            {/* 中圖 */}
            {Array.isArray(product.pics) &&
              product.pics.map((pic, index) => (
                <img
                  className="pic-md"
                  key={index}
                  src={addBase(pic)}
                  alt={`pic${index + 1}`}
                />
              ))}
            {/* 文字欄 */}
            <div className="text-area">
              <p className="title">商品說明</p>
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
          <p className="you_may_also_like">您可能會喜歡</p>
          <div className="cardlist">
            {/* Picks卡片區 */}
            {picks.slice(0, 4).map((picks, index) => (
              <Card
                key={picks.id || index}
                id={picks.id} // ✅ 傳入 id
                imgSrc={picks.imgSrc}
                title={picks.title}
                price={picks.price}
                pics={picks.pics}
              />
            ))}
          </div>
        </div>
      </main>
    </>

  );
}
