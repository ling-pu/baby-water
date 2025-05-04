import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Japan from './pages/Japan'
import World from './pages/World'
import Timesale from './pages/Timesale'
import User from './pages/User'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="wrap">
        {/* 載入導覽列 */}
        <Navbar>
          {/* 呼叫頁面 */}
          <Routes>
            <Routes path="/" element={<Home/>} />
            <Routes path="/japan" element={<Japan/>} />
            <Routes path="/world" element={<World/>} />
            <Routes path="/timesale" element={<Timesale/>} />
            <Routes path="/user" element={<User/>} />
          </Routes>
        </Navbar>

      </div>

  )
}

export default App
