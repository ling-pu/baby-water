import { Route, Routes } from "react-router-dom"
// import Home from "./Home"
import Japan from "./Japan"
import World from "./World"
import Timesale from "./Timesale"
import User from "./User"
import CheckoutPage from './CheckoutPage';
import NotFound from "./NotFound"
// import ProductPage from "./ProductPage"
import { Suspense, lazy } from "react";
import Loading from "../component/Loading";
const Home = lazy(() => import("./Home"));
const ProductPage = lazy(() => import("./ProductPage"));

export default function Pages() {
    return (
        <>
            <div className="page-wrapper">
                {/* 呼叫頁面 */}
                <Suspense fallback={<Loading />}>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/japan" element={<Japan />} />
                    <Route path="/world" element={<World />} />
                    <Route path="/timesale" element={<Timesale />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                </Suspense>

            </div>


        </>

    )
}