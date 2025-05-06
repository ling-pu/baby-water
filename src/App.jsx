import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Japan from './pages/Japan'
import World from './pages/World'
import Timesale from './pages/Timesale'
import User from './pages/User'
import Announcement from './component/Announcement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrap">
      {/* 文字跑馬燈 */}
      <Announcement/>
      
      {/* 載入導覽列 */}
      <Header>
        {/* 呼叫頁面 */}
        <Routes>
          <Routes path="/" element={<Home />} />
          <Routes path="/japan" element={<Japan />} />
          <Routes path="/world" element={<World />} />
          <Routes path="/timesale" element={<Timesale />} />
          <Routes path="/user" element={<User />} />
        </Routes>
      </Header>

    </div>

  )
}

export default App
