import '../src/scss/main.scss'
import { Toaster } from "react-hot-toast";
import Header from './component/Header'
import { BrowserRouter, Routes } from 'react-router-dom'
import Announcement from './component/Announcement'
import Pages from './pages/Pages'
import Footer from './component/Footer'
import CartDrawer from './component/CartDrawer'
import Cursor from './component/Cursor.jsx'
// 確保根目錄路徑正確部署到github
const base = import.meta.env.BASE_URL;

import { CartProvider } from './context/CartContext.jsx'
import { CategoryProvider } from './context/CategoryContext.jsx'

function App() {
  return (
    <>

      <BrowserRouter basename={base}>
      {/* 提示語 */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#1f2937", // Tailwind 的 gray-800
              color: "#fff",
              fontSize: "0.875rem",
              borderRadius: "8px",
              padding: "12px 16px",
            },
            success: {
              iconTheme: {
                primary: "#4ade80", // 綠色
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#f87171", // 紅色
                secondary: "#fff",
              },
            },
          }}
        />
        <CartProvider> {/* 全域提供購物車狀態 */}
          <CategoryProvider>
            <Cursor />
            <CartDrawer /> {/* 放在 Router 內層，能使用 context */}
            <Announcement />
            <Header />
            <Pages />
            <Footer />
            
          </CategoryProvider>
        </CartProvider>
      </BrowserRouter>

    </>
  )
}

export default App
