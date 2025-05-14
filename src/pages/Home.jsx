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
              {picks.map((picks, index) => (
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
            {/* btn */}
            <div className="btn-container">
              <a href="./Timesale" className="btn-seemore">see more</a>
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
              {world.map((world, index) => (
                <Card
                  key={index}
                  imgSrc={world.imgSrc}
                  title={world.title}
                  price={world.price}
                  link={world.link}
                  pic1={world.pic1}
                  pic2={world.pic2}
                  pic3={world.pic3}
                />
              ))}

            </div>
            {/* btn */}
            <div className="btn-container">
              <a href="./World" className="btn-seemore">see more</a>
            </div>
          </div>
        </section>

      </div>

    </>
  )
}