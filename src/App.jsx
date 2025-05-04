import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrap">
        {/* 載入導覽列 */}
        <Navbar>
          {/* 呼叫頁面 */}
          <Routes>
            <Routes path="/" element={<Home/>} />
          </Routes>

        </Navbar>

      </div>


    </>
  )
}

export default App
