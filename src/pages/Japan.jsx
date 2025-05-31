import { useNavigate } from "react-router-dom";
import Card from "../component/Card"
import { picks, world } from "../data/Data"
import { useState } from "react";
const base = import.meta.env.BASE_URL;

export default function Japan() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allItems = [...picks]; // 合併陣列
  const filteredItems = selectedCategory === "All"
    ? allItems
    : allItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <main id="jp">
        {/* 篩選 */}
        <section id="filter">
          <div className="title">
            <h1>// 全部商品</h1>
          </div>
          <br />
          <ul className="filter1">
            <li>世界選品~6/10</li>
            <li>每週超優惠~5/30</li>
            <li>夏日必備</li>
          </ul>

          <br />
          <ul className="filter2">
            {["All", "Tops", "Bottoms", "Swimwear", "Dresses", "Others"].map((cat) => (
              <li
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>

        </section>

        {/* 展示 */}
        <section id="products">

          <div className="title">
            <div className="title-row1">
              <div><h1>日本代購</h1></div>
              <div><span id="itemList-number">{filteredItems.length}</span><h1>個商品</h1></div>
            </div>
            <div className="title-row2">
              <span>依收單日期排序</span>
              <span>/</span>
              <span>依價格排序</span>
              <span>/</span>
              <span>依人氣排序</span>
            </div>
          </div>

          {/* 展示區 */}
          <div className="scroll-area">
            {/* 1列4欄 */}
            <div className="cardlist">
              {/* 卡片區 */}
              {filteredItems.map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  alt={item.title}
                  price={item.price}
                  link={item.link}
                  pic1={item.pic1}
                  pic2={item.pic2}
                  pic3={item.pic3}
                />
              ))}
            </div>
          </div>

        </section>
      </main>
    </>

  )
}