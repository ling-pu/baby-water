import banner from "../assets/banner.gif"
import bg from "../assets/bg.svg"
import Card from "../component/Card"
import { picks, world } from "../data/Data"

export default function Home() {
  return (
    <>
      <div className="home">
        <section className="banner-container">
          <img src={banner} alt="" />
          <p>Baby Water選物，想帶大家認識「值得收藏」的衣櫃成員——質感、經典、耐穿，好搭又能陪你很多年的那種，是會讓人越穿越愛、每年都想再拿出來穿的存在 ♡ 選得少一點，選得更剛好。</p>
        </section>

        <section className="pick">
          <div className="pick-head">
            <h1 className="title">Baby Water’s Pick</h1>
            <h1 className="timesale">Time Sale ~ 05/30</h1>
          </div>
          <div className="content">
            {/* 1列4欄 */}
            <div className="cardlist">
              {/* Picks卡片區 */}
              {picks.slice(0,4).map((picks, index) => (
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
              <a href="./timesale" className="btn-seemore">see more</a>
            </div>
          </div>
        </section>

        <section className="world">
          <div className="world-head">
            <h1 className="title">World Special</h1>
            <h1 className="timesale">Time Sale ~ 06/10</h1>
          </div>
          <div className="content">
            {/* 1列4欄 */}
            <div className="cardlist">
              {/* World卡片區 */}
              {world.slice(0,4).map((world, index) => (
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
              <a href="./world" className="btn-seemore">shop now</a>
            </div>
          </div>
        </section>

      </div>

    </>
  )
}