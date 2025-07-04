// src/pages/ThankYouPage.jsx
import pic from '../../src/assets/banner.gif'
export default function ThankYouPage() {
    return (
      <div className="thank-you-page">
        <h1>謝謝您的購買！</h1>
        <p>我們已收到您的訂單，會盡快為您處理。</p>
        <img src={pic} alt="品牌插圖" />
      </div>
    );
  }