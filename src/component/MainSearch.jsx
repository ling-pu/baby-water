// MainSearch.jsx

import { useState } from "react"

export default function MainSearch(){
    const [keyword, setKeyword]=useState('');

    const handleSearch=()=>{
        if (keyword.trim()){
            onSearch(keyword);
            onClose();
        }
    };
    
    return(
        <div className="mainSearch">
            <div className="mainSearch-content">
                <button className="close-btn" onClick={onClose}>x</button>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="輸入商品關鍵字"
                />
                <button onClick={handleSearch}>搜尋</button>
            </div>
        </div>
    )
}