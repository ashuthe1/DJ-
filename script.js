const background = document.querySelector(".container");
const randomcolour = () => {
  let color = 'rgba(';
  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 255) + ',';
  }
  return color;
}
const paint = () => {
  clr = randomcolour();
  clr1 = randomcolour();
  document.documentElement.style.setProperty('--clr', clr + '1)');
  document.documentElement.style.setProperty('--clr1', clr1 + '1)');
}
let music = new Audio("music.mp3")
// music.play();
setInterval(paint, 100);