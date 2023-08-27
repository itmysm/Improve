let addLineBtnClicked = false
let line = null

let canvas = new fabric.Canvas('canvas', {
  width: window.innerWidth,
  height: window.innerHeight
})

document.querySelector('#canvas').addEventListener('click', () => {
  activateAddingLine()
})

function activateAddingLine() {
  canvas.on('mouse:down', startAddingLine)
  canvas.on('mouse:move', startDrawingLine)
  canvas.on('mouse:up', stopDrawingLine)
}

function startAddingLine(o) {
  let pointer = canvas.getPointer(o.e)
  line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
    stroke: 'red',
    strokeWidth: 3
  })

  canvas.add(line)
  canvas.requestRenderAll()
}

function startDrawingLine() {
  let pointer = canvas.getPointer(o.e)
  line.set({
    x2: pointer.x,
    y2: pointer.y
  })

  canvas.requestRenderAll()
}

function stopDrawingLine() {

} 