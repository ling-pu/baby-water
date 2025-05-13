import banner from "../assets/banner.gif"
import bg from "../assets/bg.svg"

export default function Home() {
    return (
      <>
      <body className="home">
        <section className="banner-container">
        <img src={banner} alt="" />
        </section>
        
        <section className="pick">
          <div className="pick-head">
          <h1 className="title">Baby Water’s  Pick</h1>
          <h1 className="timesale">Time Sale ~ 05/30</h1>
          </div>
          <div className="content">
            {/* 1列4欄 */}
            <div className="cardlist">
            </div>
            {/* btn */}
            <div className="btn-container">
              <a href="#" className="btn-seemore">see more</a>
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
            </div>
            {/* btn */}
            <div className="btn-container">
              <a href="#" className="btn-seemore">see more</a>
            </div>
          </div>
         </section>
   

        
        <div className="home-select">

        </div>
        
      </body>

      </>
    )
  }