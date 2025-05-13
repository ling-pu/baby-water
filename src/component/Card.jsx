import { Link } from "react-router-dom";

const Card = ({imgSrc, pic1, pic2, pic3,style1,style2,style3, title, price, link = "#"}) => (
      <Link to={link} className="product-card">
        <figure>
          <img src={imgSrc} alt={title} />
        </figure>
        <div className="pic-container">
          <img src={pic1} alt={style1} />
          <img src={pic2} alt={style2} />
          <img src={pic3} alt={style3} />
        </div>
        <div className="product-text">
        </div>
        <div className='title-container'><h3>{title}</h3></div>
        <p className="product-price">{price}</p>
      </Link>
      );

export default Card;