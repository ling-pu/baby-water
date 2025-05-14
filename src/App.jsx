import '../src/scss/main.scss'
import Header from './component/Header'
import { BrowserRouter, Routes } from 'react-router-dom'
import Announcement from './component/Announcement'
import Pages from './pages/Pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Announcement />
        <Header />
        <Pages/>
      </BrowserRouter>
    </>
  )
}

export default App
