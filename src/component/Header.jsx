import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo/logo.svg";
import { useState } from "react";
import CartDrawer from './CartDrawer';
import categories from "../js/categories";
import MainSearch from "./MainSearch";
import { useCart } from "../context/CartContext";
import hamburger from "../assets/icons/burger.svg"

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();
    // 漢堡按鈕
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { isCartOpen, openCart, closeCart } = useCart();

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleClick = (type) => {
        switch (type) {
            case 'search':
                closeCart();
                setIsSearchOpen(prev => !prev);
                break;
            case 'user':
                navigate('/user');
                break;
            case 'cart':
                openCart();
                break;
            default:
                break;
        }
    };

    const handleSearch = (keyword) => {
        navigate(`/search?q=${encodeURIComponent(keyword)}`);
    };

    return (
        <>
            <header className="siteHeader isPC">
                {/* Logo */}
                <div className="logo-container">
                    <h1 className="logo">
                        <Link to="/"><img src={logo} alt="水寶日本代購 Baby Water Online Store" /></Link>
                    </h1>
                </div>

                {/* 漢堡按鈕 */}
                <button className="hamburger"
                onClick={()=> setIsMobileMenuOpen(prev => !prev)}
                >
                    <img src={hamburger} alt="hamburger-button" />
                </button>

                {/* 導覽列 */}
                <nav className="main-nav">
                    <ul>
                        {categories.map((c) => (
                            <li key={c.id} className={location.pathname.startsWith(c.path) ? 'active' : ''}>
                                <Link to={c.path}>{c.label}</Link>
                            </li>

                        ))}

                    </ul>
                </nav>

                {/* 功能列 */}
                <nav className="icon-nav">
                    <ul className="icon">
                        <li>
                            <button
                                className="icon-btn icon-search"
                                onClick={() => handleClick('search')}
                                title="搜尋"
                                aria-label="搜尋商品"
                            />
                        </li>
                        <li>
                            <button
                                className="icon-btn icon-user"
                                onClick={() => handleClick('user')}
                                title="會員中心"
                                aria-label="前往會員中心"
                            />
                        </li>
                        <li>
                            <button
                                className="icon-btn icon-cart"
                                onClick={() => handleClick('cart')}
                                title="購物車"
                                aria-label="查看購物車"
                            />
                        </li>
                    </ul>
                </nav>
            </header>

            {/* 購物車抽屜 */}
            <CartDrawer />

            {/* 搜尋彈窗 */}
            {isSearchOpen && (
                <MainSearch
                    onClose={() => setIsSearchOpen(false)}
                    onSearch={handleSearch}
                />
            )}
        </>


    )
}