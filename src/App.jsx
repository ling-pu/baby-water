import '../src/scss/main.scss'
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
        <CartProvider> {/* 全域提供購物車狀態 */}
          <CategoryProvider>
            <Cursor />
            <Announcement />
            <Header />
            <Pages />
            <Footer />
            <CartDrawer /> {/* 放在 Router 內層，能使用 context */}
          </CategoryProvider>
        </CartProvider>
      </BrowserRouter>

    </>
  )
}

export default App
