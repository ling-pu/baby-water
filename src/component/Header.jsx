import { Link } from "react-router-dom";
import logo from "/logo/logo.svg";

export default function Header() {
    return (
        <>
            <header className="siteHeader-PC">
                <Link to="/">
                    <h1 style={{ margin: 0 }}>
                        <img src={logo} alt="水寶日本代購 Baby Water Online Store" style={{ height: '40px' }} />
                    </h1>
                </Link>
                <h1><a href="/"><img src="" alt="" /></a></h1>
                <nav className="Navbar">
                    <Link to="/">首頁</Link>
                    <Link to="/japan">日本代購</Link>
                    <Link to="/world">世界選品</Link>
                    <Link to="/timesale">每週超優惠</Link>
                </nav>

            </header>
        </>


    )
}