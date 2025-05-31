// components/SortPanel.jsx
import React from "react";
import { useLocation } from "react-router-dom";

export default function SortPanel({ sortBy, sortDirection, handleSortClick, itemCount }) {
  const location = useLocation();
    // 根據路徑對應標題文字
    const getTitleByPath = (path) => {
      if (path.startsWith("/japan")) return "日本代購";
      if (path.startsWith("/world")) return "世界選品";
      if (path.startsWith("/timesale")) return "每週超優惠";
      return "商品列表";
    };
    const title = getTitleByPath(location.pathname);
  return (
    <div className="title">
      <div className="title-row1">
        <div><h1>{title}</h1></div>
        <div><span id="itemList-number">{itemCount}</span><h1>個商品</h1></div>
      </div>

      <div className="title-row2">
        <span onClick={() => handleSortClick("date")}>
          依收單日期排序 {sortBy === "date" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
        </span>
        <span>/</span>
        <span onClick={() => handleSortClick("price")}>
          依價格排序 {sortBy === "price" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
        </span>
        <span>/</span>
        <span onClick={() => handleSortClick("popularity")}>
          依人氣排序 {sortBy === "popularity" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
        </span>
      </div>
    </div>
  );
}
