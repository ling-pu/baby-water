// components/FilterPanel.jsx
import React from "react";

export default function FilterPanel({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = ["All", "Tops", "Bottoms", "Swimwear", "Dresses", "Others"];

  return (
    <>
      {/* 篩選區塊 */}
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
          {categories.map((cat) => (
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

      
    </>
  );
}
