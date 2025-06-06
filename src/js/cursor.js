const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverable');

document.body.addEventListener('mousemove', (e) => {
  TweenMax.to(bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15,
  });
  TweenMax.to(smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7,
  });
});

hoverables.forEach((hoverable) => {
  hoverable.addEventListener('mouseenter', () => {
    TweenMax.to(bigBall, 0.3, {
      scale: 4,
    });
  });
  hoverable.addEventListener('mouseleave', () => {
    TweenMax.to(bigBall, 0.3, {
      scale: 1,
    });
  });
});
