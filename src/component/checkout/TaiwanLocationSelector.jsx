// src/component/checkout/TaiwanLocationSelector.jsx
import React, { useState, useEffect } from 'react';

// 台灣縣市＋鄉鎮完整清單（只列出部分示意，實際你可以擴充完整）
const cityTownData = {
  '台北市': ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
  '新北市': ['板橋區', '三重區', '中和區', '永和區', '新莊區', '新店區', '樹林區', '鶯歌區', '三峽區', '淡水區', '汐止區', '瑞芳區', '土城區', '蘆洲區', '五股區', '八里區', '林口區', '泰山區', '深坑區', '石碇區', '坪林區', '三芝區', '石門區', '金山區', '萬里區', '烏來區'],
  '桃園市': ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '大溪區', '龍潭區', '龜山區', '觀音區', '復興區'],
  '台中市': ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '和平區', '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'],
  '台南市': ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'],
  '高雄市': ['新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區', '楠梓區', '小港區', '左營區', '仁武區', '大社區', '岡山區', '路竹區', '阿蓮區', '田寮區', '燕巢區', '橋頭區', '梓官區', '彌陀區', '永安區', '湖內區', '鳳山區', '大寮區', '林園區', '鳥松區', '大樹區', '旗山區', '美濃區', '六龜區', '內門區', '杉林區', '甲仙區', '桃源區', '那瑪夏區', '茂林區', '茄萣區'],
  // 你可以繼續補充完整...
};

export default function TaiwanLocationSelector({ city, town, onChange }) {
  const towns = cityTownData[city] || [];

  // 縣市變更時，預設鄉鎮設為第一個
  useEffect(() => {
    if (towns.length > 0) {
      onChange({ city, town: towns[0] });
    } else {
      onChange({ city, town: '' });
    }
  }, [city]);

  return (
    <div>
      <label>縣市*</label>
      <select
        value={city}
        onChange={(e) => onChange({ city: e.target.value, town: cityTownData[e.target.value]?.[0] || '' })}
      >
        {Object.keys(cityTownData).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <label>鄉鎮*</label>
      <select
        value={town}
        onChange={(e) => onChange({ city, town: e.target.value })}
      >
        {towns.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
    </div>
  );
}
