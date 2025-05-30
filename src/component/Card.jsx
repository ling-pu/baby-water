import { useState } from "react";
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const addBase = (path) => {
  if (!path) return "";
  return base + path.replace(/^\/+/, "");
};

const Card = ({
  id, // ⬅️ 加上 id
  imgSrc,
  pic1,
  pic2,
  pic3,
  style1,
  style2,
  style3,
  title,
  price,
}) => {
  const [mainImg, setMainImg] = useState(imgSrc);
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
        <del className="item-price-og">{price}</del>
        <p className="item-price">{price}</p>
        <div className="pic-sm-container" onMouseLeave={() => setMainImg(imgSrc)}>
          {pic1 && (
            <img
              src={addBase(pic1)}
              alt={style1}
              onMouseEnter={() => setMainImg(pic1)}
            />
          )}
          {pic2 && (
            <img
              src={addBase(pic2)}
              alt={style2}
              onMouseEnter={() => setMainImg(pic2)}
            />
          )}
          {pic3 && (
            <img
              src={addBase(pic3)}
              alt={style3}
              onMouseEnter={() => setMainImg(pic3)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
