import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PriceFormatter from "./PriceFormatter";

const base = import.meta.env.BASE_URL;

const addBase = (path) => {
  if (!path) return "";
  return base + path.replace(/^\/+/, "");
};

const Card = ({
  id, // ⬅️ 加上 id
  imgSrc,
  pics = [],       // 預設為空陣列，避免沒傳出錯
  styles = [],     // 同上     
  title,
  price,
}) => {
  const [mainImg, setMainImg] = useState(imgSrc || pics[0]);
  const navigate = useNavigate();

  // ⬇️ 點擊跳轉到 /product/:id
  const handleClick = () => {
    if (id) navigate(`/product/${id}`);
  };

  return (
    <div onClick={handleClick} className="item-card hoverable">
      <figure>
        <img src={addBase(mainImg)} alt={title} />
      </figure>
      <div className="content-container">
        <h3 className="title">{title}</h3>
        <div className="item-price-area">
          <del className="item-price-del"><PriceFormatter price={price} /></del>
          <p className="item-price"><PriceFormatter price={price} /></p>
        </div>
        {/* ✅ 小圖切換區，支援 pics + styles */}
        <div
          className="pic-sm-container"
          onMouseLeave={() => setMainImg(imgSrc ? imgSrc : pics[0] || "")}
        >
          {pics.map((pic, idx) => (
            <img
              key={idx}
              src={addBase(pic)}
              alt={styles[idx] || `樣式 ${idx + 1}`}
              onMouseEnter={() => setMainImg(pic)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
