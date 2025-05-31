// components/SortPanel.jsx
import React from "react";

export default function SortPanel({ sortBy, sortDirection, handleSortClick, itemCount }) {
  return (
    <div className="title">
      <div className="title-row1">
        <div><h1>日本代購</h1></div>
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
