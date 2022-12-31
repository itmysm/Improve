let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')

const width = 60,
  height = 60,
  gap = 20;

let x, y;


context.fillStyle = 'blue'
for (let index = 0; index < 5; index++) {
  for (let j = 0; j < 5; j++) {
    x = 100 + (width + gap) * index
    y = 100 + (height + gap) * j;
    context.rect(x, y, width, height)
    context.stroke();

    if (Math.random() > .5) {
      context.beginPath();
      context.rect(x + 8, y + 8, width - 16, height - 16);
      context.stroke()
    }
  }
}