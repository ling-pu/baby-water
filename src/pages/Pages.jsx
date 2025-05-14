import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Japan from "./Japan"
import World from "./World"
import Timesale from "./Timesale"
import User from "./User"
import NotFound from "./NotFound"

export default function Pages() {
    return (
        <>
            {/* 呼叫頁面 */}
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/japan" element={<Japan />} />
                <Route path="/world" element={<World />} />
                <Route path="/timesale" element={<Timesale />} />
                <Route path="/user" element={<User />} />
            </Routes>

        </>

    )
}