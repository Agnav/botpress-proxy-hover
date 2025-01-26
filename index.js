const limitY = 90;
const limitX = 60;
const imgWrapper = document.getElementById("image-wrapper");
const overlay = document.getElementById("overlay");
const background = document.getElementById("background");
const rekt = imgWrapper.getBoundingClientRect();
const rektX = rekt.x;
const rektY = rekt.y;
const WrapX = rekt.left + rekt.width / 2;
const WrapY = rekt.top + rekt.height / 2;

console.log(WrapX, WrapY);

imgWrapper.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const degY = (mouseX - rektX - rekt.width / 2) / limitY;
  const degX = (mouseY - rektY - rekt.height / 2) / limitX;
  overlay.style.willChange = `transform`;
  background.style.willChange = `transform`;
  overlay.style.transform = `perspective(900px) rotateX(${-degX}deg) rotateY(${degY}deg) translateZ(50px)  scale(0.94)`;
  background.style.transform = `perspective(1000px) rotateX(${-degX}deg) rotateY(${degY}deg) translateZ(-30px)  scale(1.04)`;
  console.log(rekt.y);
  console.log(mouseY);
});

imgWrapper.addEventListener("mouseleave", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const degY = (mouseX - rektX - rekt.width / 2) / limitX;
  const degX = (mouseY - rektY - rekt.height / 2) / limitY;
  overlay.style.willChange = `transform`;
  background.style.willChange = `transform`;
  overlay.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(50px)  scale(0.94)`;
  background.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(-30px)  scale(1.04)`;
  background.style.transition = `transform 0.2s ease-out`;
  overlay.style.transition = `transform 0.2s ease-out`;
});

// function angle(mx, my, wx, wy) {
//   const dx = wx - mx;
//   const dy = wy - my;
//   const rad = Math.atan2(dy, dx);
//   const deg = (rad * 180) / Math.PI;
//   return deg;
// }
