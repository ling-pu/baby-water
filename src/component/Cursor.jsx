// import React, { useEffect, useRef } from 'react';
// import '../scss/main.scss';


// export default function Cursor() {
  // const bigRef = useRef(null);
  // const smallRef = useRef(null);

  // useEffect(() => {
  //   const big = bigRef.current;
  //   const small = smallRef.current;

  //   let mouseX = 0, mouseY = 0;
  //   let bigX = 0, bigY = 0;
  //   let smallX = 0, smallY = 0;

  //   const handleMouseMove = (e) => {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //   };

  //   const handleClick = () => {
  //     big.style.transition = 'transform 0.15s ease';
  //     big.style.transform += ' scale(0.6)';
  //     setTimeout(() => {
  //       big.style.transform = `translate(${bigX}px, ${bigY}px) scale(1)`;
  //     }, 150);
  //   };

  //   const animate = () => {
  //     bigX += (mouseX - bigX) * 0.1;
  //     bigY += (mouseY - bigY) * 0.1;
  //     smallX += (mouseX - smallX) * 0.2;
  //     smallY += (mouseY - smallY) * 0.2;

  //     big.style.transform = `translate(${bigX}px, ${bigY}px)`;
  //     small.style.transform = `translate(${smallX}px, ${smallY}px)`;

  //     requestAnimationFrame(animate);
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);
  //   document.addEventListener('mousedown', handleClick);
  //   animate();

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, []);

  
  // return (
    // <div className="cursor">
    //   <div ref={bigRef} className="cursor__ball cursor__ball--big"></div>
    //   <div ref={smallRef} className="cursor__ball cursor__ball--small"></div>
    // </div>
  // );
// };

// src/components/Cursor.jsx
// import '../scss/main.scss';

// // src/components/Cursor.jsx
// import React, { useEffect, useRef } from 'react';
// import { TweenMax } from 'gsap';

// const Cursor = () => {
//   const bigBallRef = useRef(null);
//   const smallBallRef = useRef(null);
//   const hoverablesRef = useRef([]);

//   useEffect(() => {
//     const bigBall = bigBallRef.current;
//     const smallBall = smallBallRef.current;
//     const hoverables = document.querySelectorAll('.hoverable');

//     const onMouseMove = (e) => {
//       TweenMax.to(bigBall, 0.4, {
//         x: e.pageX - 15,
//         y: e.pageY - 15,
//       });
//       TweenMax.to(smallBall, 0.1, {
//         x: e.pageX - 5,
//         y: e.pageY - 7,
//       });
//     };

//     const onMouseHover = () => {
//       TweenMax.to(bigBall, 0.3, {
//         scale: 4,
//       });
//     };

//     const onMouseHoverOut = () => {
//       TweenMax.to(bigBall, 0.3, {
//         scale: 1,
//       });
//     };

//     document.body.addEventListener('mousemove', onMouseMove);
//     hoverables.forEach((el) => {
//       el.addEventListener('mouseenter', onMouseHover);
//       el.addEventListener('mouseleave', onMouseHoverOut);
//     });

//     return () => {
//       document.body.removeEventListener('mousemove', onMouseMove);
//       hoverables.forEach((el) => {
//         el.removeEventListener('mouseenter', onMouseHover);
//         el.removeEventListener('mouseleave', onMouseHoverOut);
//       });
//     };
//   }, []);

//   return (
//     <div className="cursor">
//       <div ref={bigBallRef} className="cursor__ball cursor__ball--big">
//         <svg height="30" width="30">
//           <circle cx="15" cy="15" r="12" strokeWidth="0" />
//         </svg>
//       </div>

//       <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
//         <svg height="10" width="10">
//           <circle cx="5" cy="5" r="4" strokeWidth="0" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Cursor;

import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import '../scss/main.scss';

const Cursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    if (!bigBall || !smallBall) return;

    const onMouseMove = (e) => {
      TweenMax.to(bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
      TweenMax.to(smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    };

    const onMouseHover = () => {
      TweenMax.to(bigBall, 0.3, {
        scale: 4,
      });
    };

    const onMouseHoverOut = () => {
      TweenMax.to(bigBall, 0.3, {
        scale: 1,
      });
    };

    document.body.addEventListener('mousemove', onMouseMove);

    // 注意：這邊一定要在 useEffect 裡抓 hoverable（因為元件渲染後 hoverable 才會存在）
    const hoverables = document.querySelectorAll('.hoverable');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onMouseHover);
      el.addEventListener('mouseleave', onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseHover);
        el.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div ref={bigBallRef} className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" stroke="0" fill="black" />
        </svg>
      </div>

      <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" stroke="0" fill="black" />
        </svg>
      </div>
    </div>
  );
};

export default Cursor;


