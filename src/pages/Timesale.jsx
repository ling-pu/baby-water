import Card from "../component/Card"
import { picks, world } from "../data/Data"

export default function Timesale() {
  const allItems = [...world]; // 合併陣列
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredItems = selectedCategory === "All"
    ? allItems
    : allItems.filter(item => item.category === selectedCategory);
  return (
    <>
      <main id="jp">
        {/* 篩選 */}
        <section id="filter">
          <div className="title">
            <h1>// 每週超優惠</h1>
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
              <div><h1>每週超優惠~5/30</h1></div>
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