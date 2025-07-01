
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
        x: e.clientX - 15,
        y: e.clientY - 15,
      });
      TweenMax.to(smallBall, 0.1, {
        x: e.clientX - 5,
        y: e.clientY - 7,
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


