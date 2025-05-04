import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        
        <nav className="Navbar">
            <Link to="/">首頁</Link>
            <Link to="/japan">日本代購</Link>
            <Link to="/world">世界選品</Link>
            <Link to="/timesale">每週超優惠</Link>
        </nav>
    )
}