const base = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer>
      {/* 第一區塊：社群與聯絡方式 */}
      <div className="footer-row1">
        {/* Follow us */}
        <section className="follow-us">
          <h5>Follow us</h5>
          <div className="footer-icon-container">
            <p>@babywater.stuff</p><a href="https://www.instagram.com/babywater.stuff/" target="_blank" rel="noopener noreferrer">
              {/* <img src={`${base}icons/IG.svg`} alt="Instagram" /> */}
            </a>
          </div>
        </section>

        {/* Contact us */}
        <section className="contact-us">
          <h5>Contact us</h5>
          <address>
            官方 LINE：<a href="https://line.me/R/ti/p/@064nzskq?ts=06201355&oat_content=url">@babywater</a>
          </address>
        </section>
      </div>

      {/* 第二區塊：版權與政策連結 */}
      <div className="copyright">
        copyright © 2025 babywater. All rights reserved.
      </div>

      {/* 預留：服務條款與政策連結 */}
      {/* 
      <div className="terms">
        <span>服務條款</span> | 
        <span>隱私政策</span> | 
        <span>退款政策</span>
      </div> 
      */}
    </footer>
  );
}
