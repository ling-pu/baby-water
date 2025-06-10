const bar = document.getElementById("bar");

document.addEventListener("scroll", () => {
  if (!bar) return;
  const invisibleArea = document.body.scrollHeight - window.innerHeight;
  let scrollRate = invisibleArea > 0 ? Math.floor((window.scrollY / invisibleArea) * 100) : 0;
  bar.style.width = scrollRate + "%";
});