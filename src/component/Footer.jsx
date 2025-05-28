const base = import.meta.env.BASE_URL;


export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-row1">
          <div className="follow-us">
            <h2>Follow us</h2>
            <div className="footer-icon-container">
              <img src={`${base}icons/IG.svg`} alt="instagram" />
              <img src={`${base}icons/line.svg`} alt="line" />
            </div>
          </div>
          <div className="contact-us">
            <h2>Contact us</h2>
            <div>
              <p>官方line : @babywater</p>
            </div>
          </div>
          
        </div>
        <div className="copyright">
            copyright © 2025 babywater.All rights reserved.
          </div>
          {/* <div className="terms">
            <span>服務條款</span> | 
            <span>隱私政策</span> | 
            <span>退款政策</span>
          </div> */}
      </footer>
    </>

  )
}