class BoardGame {
  constructor(settings) {
    this.tiles = []
    this.rows = settings.rows
    this.cols = settings.columns
    this.tileSize = settings.tileSize
    this.counter = 1
  }

  initialize() {
    const rows = new Array(this.rows).fill([])
    rows.forEach((row, index) => {
      rows[index] = new Array(this.cols).fill(0).map(col => this.counter++)
    })
    
    this.shuffle(rows)
  } // tiles Initialized
  
  shuffle(arr2D) {
    const mergedArray = [].concat(...arr2D) // turn 2D array to 1D for shuffling
    mergedArray.sort((a, b) => 0.5 - Math.random()) // shuffling
    while (mergedArray.length) this.tiles.push(mergedArray.splice(0, this.cols)); // turn back to 2D array

    const status = isSolvable(this.tiles)
    
    if (status) {
      this.createBoard()
    } else {
      this.tiles = []
      this.shuffle(arr2D)
    }
  }
  
  createBoard() {
    const gameBoard = document.querySelector('.gameBoard')
    const table = document.createElement('table')

    for (let index = 0; index < this.tiles.length; index++) {
      const tr = document.createElement('tr')
      tr.setAttribute('id', 'row' + (index))

      for (let j = 0; j < this.tiles[index].length; j++) {
        const td = document.createElement('td')
        const tile = this.tiles[index][j]

        if (tile === this.rows * this.cols) td.setAttribute('class', 'empty')

        td.setAttribute('id', tile)
        td.style.width = this.tileSize + 'px'
        td.style.height = this.tileSize + 'px'
        td.innerText = tile

        tr.appendChild(td)
      }

      table.appendChild(tr)
    }
    gameBoard.innerHTML = ``
    gameBoard.appendChild(table)
  }

  play(id) {
    const tileIndex = getSelectedTile(this.tiles, id)

    let blankRow;
    let blankCol;
    for (let i = 0; i < this.tiles.length; i++) {
      for (let j = 0; j < this.tiles[i].length; j++) {
        if (this.tiles[i][j] === this.rows * this.cols) {
          blankRow = i;
          blankCol = j;
          break;
        }
      }
    }


    if (
      (tileIndex[0] === blankRow && Math.abs(tileIndex[1] - blankCol) === 1) ||
      (tileIndex[1] === blankCol && Math.abs(tileIndex[0] - blankRow) === 1)
    ) {
      
      // Swap the values of the blank space and the tile to be moved
      const temp = this.tiles[blankRow][blankCol];
      this.tiles[blankRow][blankCol] = this.tiles[tileIndex[0]][tileIndex[1]];
      this.tiles[tileIndex[0]][tileIndex[1]] = temp;
      isSolved(this.tiles)
      this.createBoard()
    }
  }

  continue() {
    this.createBoard()
  }

  update(newSettings) {
    this.rows = +newSettings.rows
    this.cols = +newSettings.columns
    this.tileSize = newSettings.tileSize
    this.tiles = []
    this.counter = 1
    this.initialize()
  }
}


function getSelectedTile(tiles, id) {
  const value = document.getElementById(id).innerText
  const selectedTile = [+document.getElementById(id).parentElement.getAttribute('id').split('row')[1]]

  tiles[selectedTile[0]].forEach((ti, i) => {
    if (ti == value) selectedTile.push(+i)
  })
  return selectedTile
}

function isSolvable(tiles) {
  let inversions = 0;
  const flatBoard = tiles.flat();
  for (let i = 0; i < flatBoard.length; i++) {
    for (let j = i + 1; j < flatBoard.length; j++) {
      if (flatBoard[i] > 0 && flatBoard[j] > 0 && flatBoard[i] > flatBoard[j]) {
        inversions++;
      }
    }
  }
  return inversions % 2 === 0
}

function isSolved (tiles) {
  const sorted = tiles.flat().sort()
  if (JSON.stringify(sorted) == JSON.stringify(tiles.flat())) {
    window.alert('You win!')
  }
}

export default { BoardGame }