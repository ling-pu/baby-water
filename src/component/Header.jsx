import { Link } from "react-router-dom";
import logo from "/logo/logo.svg";
import Announcement from "./Announcement";

export default function Header() {
    const IconNav = () => {
        const handleClick = (type) => {
            switch (type) {
                case 'search':
                    const keyword = prompt('輸入關鍵字');
                    if (keyword) {
                        window.location.href = `/search?q=${encodeURIComponent(keyword)}`;
                    }
                    break;
                case 'user':
                    window.location.href = '/user';
                    break;
                case 'cart':
                    window.location.href = '/cart';
                    break;
            }
        }
    }
    return (
        <>
            <header className="siteHeader isPC">
                {/* Logo區 */}
                <div className="logo-container">
                    <h1 className="logo">
                        <Link to="/"><img src={logo} alt="水寶日本代購 Baby Water Online Store" /></Link>
                    </h1>
                </div>
                {/* 導覽列區 2列 */}
                <div className="nav-container">
                    <nav className="icon-nav">
                        <ul className="icon">
                            <li>
                                <button className="icon-btn icon-search"
                                    onClick={() => handleClick('search')}
                                    title="搜尋"></button>
                            </li>
                            <li>
                                <button
                                    className="icon-btn icon-user"
                                    onClick={() => handleClick('user')}
                                    title="會員中心"></button>
                            </li>
                            <li>
                                <button className="icon-btn icon-cart"
                                    onClick={() => handleClick('cart')}
                                    title="購物車"></button>
                            </li>
                        </ul>
                    </nav>
                    <nav className="main-nav">
                        <ul>
                            <li><Link to="/japan">日本代購</Link></li>
                            <li><Link to="/world">世界選品</Link></li>
                            <li><Link to="/timesale">每週超優惠</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>


    )
}