import '../src/scss/main.scss'
import Header from './component/Header'
import { BrowserRouter, Routes } from 'react-router-dom'
import Announcement from './component/Announcement'
import Pages from './pages/Pages'
import Footer from './component/Footer'
import CartDrawer from './component/CartDrawer'
const base = import.meta.env.BASE_URL;

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Announcement />
        <Header />
        <Pages/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
