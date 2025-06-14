import { useNavigate } from "react-router-dom";
import Card from "../component/Card"
import { picks, world } from "../data/Data"
import { useContext, useEffect, useState } from "react";
import FilterPanel from "../component/FilterPanel";
import SortPanel from "../component/SortPanel";
import { useCategory } from "../context/CategoryContext";
const base = import.meta.env.BASE_URL;

export default function Japan() {

  useEffect(() => {
    window.scrollTo(0, 0); // 捲動到頁面頂部
  }, []);

  const navigate = useNavigate();
  const allItems = [...picks]; // 合併陣列

  // 篩選服飾類型(多選)
  const { selectedCategories } = useCategory(); 
  const filteredItems = selectedCategories.includes("All")

    ? allItems
    : allItems.filter(item => selectedCategories.includes(item.category));
  // 排序
  const [sortBy, setSortBy] = useState("none");
  const [sortDirection, setSortDirection] = useState("asc"); // 預設為升序

  let sortedItems = [...filteredItems];

  if (sortBy === "price") {
    sortedItems.sort((a, b) =>
      sortDirection === "asc" ? a.price - b.price : b.price - a.price
    );
  } else if (sortBy === "popularity") {
    sortedItems.sort((a, b) =>
      sortDirection === "asc" ? a.popularity - b.popularity : b.popularity - a.popularity
    );
  } else if (sortBy === "date") {
    sortedItems.sort((a, b) =>
      sortDirection === "asc"
        ? new Date(a.endDate) - new Date(b.endDate)
        : new Date(b.endDate) - new Date(a.endDate)
    );
  }

  function handleSortClick(type) {
    if (sortBy === type) {
      // 如果點到同一個排序，再次點擊就反轉方向
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      // 點到不同的排序類型，設為升序
      setSortBy(type);
      setSortDirection("asc");
    }
  }

  return (
    <>
      <main id="jp">
        {/* 篩選區 */}
        <FilterPanel/>

        {/* 展示 */}
        <section id="products">
          {/* 排序區 */}
          <SortPanel
            sortBy={sortBy}
            sortDirection={sortDirection}
            handleSortClick={handleSortClick}
            itemCount={sortedItems.length}
          />

          {/* 展示區 */}
          <div className="scroll-area">
            {/* 1列4欄 */}
            <div className="cardlist">
              {/* 卡片區 */}
              {sortedItems.map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  alt={item.title}
                  price={item.price}
                  pics={item.pics}
                />
              ))}
            </div>
          </div>

        </section>
      </main>
    </>

  )
}