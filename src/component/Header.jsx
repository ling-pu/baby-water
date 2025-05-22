import { Link, useNavigate } from "react-router-dom";
import logo from "/logo/logo.svg";
import { useState } from "react";
import CartDrawer from './CartDrawer';

export default function Header() {

    const navigate = useNavigate();

    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleClick = (type) => {
        switch (type) {
            case 'search':
                const keyword = prompt('輸入關鍵字');
                if (keyword) {
                    navigate(`/search?q=${encodeURIComponent(keyword)}`);
                }
                break;
            case 'user':
                navigate('/user');
                break;
            case 'cart':
                setIsCartOpen(true);
                break;
            default:
                break;
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
                {/* 導覽列區 */}
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/japan">日本代購</Link></li>
                        <li><Link to="/world">世界選品</Link></li>
                        <li><Link to="/timesale">每週超優惠</Link></li>
                    </ul>
                </nav>
                <nav className="icon-nav">
                    <ul className="icon">
                        <li>
                            <button
                                className="icon-btn icon-search"
                                onClick={() => handleClick('search')}
                                title="搜尋"
                                aria-label="搜尋商品"
                            ></button>
                        </li>
                        <li>
                            <button
                                className="icon-btn icon-user"
                                onClick={() => handleClick('user')}
                                title="會員中心"
                                aria-label="前往會員中心"
                            ></button>
                        </li>
                        <li>
                            <button
                                className="icon-btn icon-cart"
                                onClick={() => handleClick('cart')}
                                title="購物車"
                                aria-label="查看購物車"
                            ></button>
                        </li>
                    </ul>
                </nav>


            </header>

            {/* 購物車小視窗 */}
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        </>


    )
}