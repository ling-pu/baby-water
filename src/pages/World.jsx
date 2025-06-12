import { useState } from "react";
import Card from "../component/Card"
import { picks, world } from "../data/Data"
import FilterPanel from "../component/FilterPanel";
import SortPanel from "../component/SortPanel";
import { useCategory } from "../context/CategoryContext";


export default function World() {

  const allItems = [...world]; // 合併陣列
 // 篩選服飾類型(多選)
 const { selectedCategories } = useCategory(); 
 const filteredItems = selectedCategories.includes("All")
   ? allItems
   : allItems.filter(item => selectedCategories.includes(item.category));
  // 排序
  const [sortBy, setSortBy] = useState("none");
  const [sortDirection, setSortDirection] = useState("asc"); // 預設為升序
  const parsePrice = (priceStr) => {
    // "NT$ 520" → 520
    return parseFloat(priceStr.replace(/[^\d.]/g, ''));
  };

  let sortedItems = [...filteredItems];

  if (sortBy === "price") {
    sortedItems.sort((a, b) =>
      sortDirection === "asc"
        ? parsePrice(a.price) - parsePrice(b.price)
        : parsePrice(b.price) - parsePrice(a.price)
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
              {/* World卡片區 */}
              {sortedItems.map((world, index) => (
                <Card
                  key={index}
                  id={world.id}
                  imgSrc={world.imgSrc}
                  title={world.title}
                  price={world.price}
                  pics={world.pics}
                />
              ))}
            </div>
          </div>

        </section>
      </main>
    </>
  )
}