import banner from "../assets/banner.gif"
import babywater from "../assets/icons/logo.svg"
import bg from "../assets/bg.svg"
import Card from "../component/Card"
import { picks, world } from "../data/Data"
import { Link } from "react-router-dom"
const base = import.meta.env.BASE_URL;

const addBase = (path) => {
  if (!path) return "";
  return base + path.replace(/^\/+/, "");
};


export default function Home() {
  return (
    <>
      <section className="banner-container">
        <div>
          <img src={babywater} alt="" />
          <p className="p-banner">想帶大家認識「值得收藏」的衣櫃成員——質感、經典、耐穿，能陪你走過好幾個季節的存在 ♡ </p>
          <div className="btn-container">
            <a href="#timesale" className="btn-seemore">おすすめ ITEM</a>
          </div>
        </div>

        <img src={banner} alt="" />
      </section>
      <div className="home">


        <section className="pick" id="timesale">
          <div className="pick-head">
            <h2 className="title">Baby Water’s Pick</h2>
            <h2 className="timesale">Time Sale ~ 05/30</h2>
          </div>
          <div className="content">
            {/* 1列4欄 */}
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
            {/* btn */}
            <div className="btn-container">
              {/* <a href={addBase("/timesale")} className="btn-seemore">see more
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.34148 18.6067L14.6585 11.9829L9.34148 5.39334" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></a> */}
              <Link to={("/timesale")} className="btn-seemore">
                see more
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.34148 18.6067L14.6585 11.9829L9.34148 5.39334" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="world">
          <div className="world-head">
            <h2 className="title">World Special</h2>
            <h2 className="timesale">Time Sale ~ 06/10</h2>
          </div>
          <div className="content">
            {/* 1列4欄 */}
            <div className="cardlist">
              {/* World卡片區 */}
              {world.slice(0, 4).map((world, index) => (
                <Card
                  key={world.id || index}
                  id={world.id} // ✅ 傳入 id
                  imgSrc={world.imgSrc}
                  title={world.title}
                  price={world.price}
                  pics={world.pics}
                />
              ))}

            </div>
            {/* btn */}
            <div className="btn-container">
              <Link to={("/world")} className="btn-seemore">shop now
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.34148 18.6067L14.6585 11.9829L9.34148 5.39334" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </div>

    </>
  )
}