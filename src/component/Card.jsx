import { useState } from "react";
import { Link } from "react-router-dom";
const base = import.meta.env.BASE_URL;

// const Card = ({ imgSrc, pic1, pic2, pic3, style1, style2, style3, title, price, link = "#" }) => {
//   const [mainImg, setMainImg] = useState(imgSrc);
//   return (
//     <Link to={link} className="item-card">
//       <figure>
//         <img src={imgSrc} alt={title} />
//       </figure>
//       <div className="content-container">
//         <h3 className="title">{title}</h3>
//         <p className="item-price">{price}</p>
//         <div className="pic-sm-container">
//           {pic1 && <img src={pic1} alt={style1} onMouseEnter={() => setMainImg(pic1)} />}
//           {pic2 && <img src={pic2} alt={style2} onMouseEnter={() => setMainImg(pic2)} />}
//           {pic3 && <img src={pic3} alt={style3} onMouseEnter={() => setMainImg(pic3)} />}
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;


const addBase = (path) => {
  if (!path) return "";
  // 避免重複斜線
  return base + path.replace(/^\/+/, "");
};

const Card = ({
  imgSrc,
  pic1,
  pic2,
  pic3,
  style1,
  style2,
  style3,
  title,
  price,
  link = "#"
}) => {
  const [mainImg, setMainImg] = useState(imgSrc);

  return (
    <Link to={link} className="item-card">
      <figure>
        <img src={addBase(mainImg)} alt={title} />
      </figure>
      <div className="content-container">
        <h3 className="title">{title}</h3>
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
    </Link>
  );
};

export default Card;