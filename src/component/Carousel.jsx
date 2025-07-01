// src/component/Carousel.jsx
import { useEffect, useState } from "react";

export default function Carousel({ images, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="carousel">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`banner-${i}`}
          className={`carousel-image ${i === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
