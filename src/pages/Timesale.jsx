import { useState } from "react";
import Card from "../component/Card"
import { picks, world } from "../data/Data"
import FilterPanel from "../component/FilterPanel";
import SortPanel from "../component/SortPanel";

export default function Timesale() {
  const allItems = [...picks]; // 合併陣列
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredItems = selectedCategory === "All"
    ? allItems
    : allItems.filter(item => item.category === selectedCategory);
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
        {/* 篩選 */}
        <FilterPanel
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        {/* 展示 */}
        <section id="products">

          {/* 排序區 */}
          <SortPanel
            sortBy={sortBy}
            sortDirection={sortDirection}
            handleSortClick={handleSortClick}
            itemCount={filteredItems.length}
          />

          {/* 展示區 */}
          <div className="scroll-area">
            {/* 1列4欄 */}
            <div className="cardlist">
              {/* 卡片區 */}
              {filteredItems.map((picks, index) => (
                <Card
                  key={index}
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

        </section>
      </main>
    </>

  )
}