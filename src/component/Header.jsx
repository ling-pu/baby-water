import { Link } from "react-router-dom";
import logo from "/logo/logo.svg";

export default function Header() {
    return (
        <>
            <header className="siteHeader isPC">
                <h1 className="logo">
                    <Link to="/"><img src={logo} alt="水寶日本代購 Baby Water Online Store" /></Link>
                </h1>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/japan">日本代購</Link></li>
                        <li><Link to="/world">世界選品</Link></li>
                        <li><Link to="/timesale">每週超優惠</Link></li>
                    </ul>
                </nav>

            </header>
        </>


    )
}