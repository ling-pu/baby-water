import React from "react";
import { useCategory } from "../context/CategoryContext";

export default function FilterPanel() {
  const { selectedCategories, toggleCategory } = useCategory();

  const categories = ["All", "Tops", "Bottoms", "Swimwear", "Dresses", "Others"];

// const toggleCategory = (cat) => {
//     if (cat === "All") {
//       setSelectedCategories(["All"]);
//     } else {
//       setSelectedCategories((prev) => {
//         const isSelected = prev.includes(cat);
//         let newSelection;

//         if (isSelected) {
//           newSelection = prev.filter((item) => item !== cat);
//         } else {
//           newSelection = [...prev.filter((item) => item !== "All"), cat];
//         }

//         // 如果沒選任何分類，預設選 All
//         return newSelection.length > 0 ? newSelection : ["All"];
//       });
//     }
//   };

  return (
    <section id="filter">
      <div className="title">
        <h1>// 全部商品</h1>
      </div>
      <br />
      <ul className="filter1">
        <li><a href="./world">世界選品~6/10</a></li>
        <li><a href="./timesale">每週超優惠~5/30</a></li>
        {/* <li>夏日必備</li> */}
      </ul>

      <br />
      <ul className="filter2">
        {categories.map((cat) => (
          <li
            key={cat}
            className={selectedCategories.includes(cat) ? "active" : ""}
            onClick={() => toggleCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </section>
  );
}
