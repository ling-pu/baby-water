import React, { useEffect, useRef } from 'react';
import '../scss/main.scss';


export default function Cursor (){
    const bigRef = useRef(null);
    const smallRef = useRef(null);
  
    useEffect(() => {
      const big = bigRef.current;
      const small = smallRef.current;
  
      let mouseX = 0, mouseY = 0;
      let bigX = 0, bigY = 0;
      let smallX = 0, smallY = 0;
  
      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };
  
      const handleClick = () => {
        big.style.transition = 'transform 0.15s ease';
        big.style.transform += ' scale(0.6)';
        setTimeout(() => {
          big.style.transform = `translate(${bigX}px, ${bigY}px) scale(1)`;
        }, 150);
      };
  
      const animate = () => {
        bigX += (mouseX - bigX) * 0.1;
        bigY += (mouseY - bigY) * 0.1;
        smallX += (mouseX - smallX) * 0.2;
        smallY += (mouseY - smallY) * 0.2;
  
        big.style.transform = `translate(${bigX}px, ${bigY}px)`;
        small.style.transform = `translate(${smallX}px, ${smallY}px)`;
  
        requestAnimationFrame(animate);
      };
  
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', handleClick);
      animate();
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleClick);
      };
    }, []);
  
    return (
      <div className="cursor">
        <div ref={bigRef} className="cursor__ball cursor__ball--big"></div>
        <div ref={smallRef} className="cursor__ball cursor__ball--small"></div>
      </div>
    );
  };
  