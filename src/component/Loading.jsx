// components/Loading.jsx
import banner from "../assets/banner.gif"
export default function Loading() {
    return (
        <div className="loading-screen">
            <img src={banner} alt="水寶插圖" />
            <div className="spinner" />
        </div>
    );
}