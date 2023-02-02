import BoardGame from './module.js'

let boardCounter = 1;
// controls element
const boardGamesSelect = document.querySelector('#boardGame')
const tileSizeInput = document.querySelector('#tileSize')
const rowsInput = document.querySelector('#boardRows')
const columnsInput = document.querySelector('#boardColumns')
const parentApplyBtn = document.querySelector('#parentApplyBtn')
const applyButton = document.querySelector('#controlsApply')
const newBoardButton = document.querySelector('#addNewBoard')

const boards = {
  // instances add here
};

let oldSettings; // this value initialize for getting a copy of old setting 
function DefaultBoardGameSettings() {
  this.tileSize = 60
  this.rows = 3
  this.columns = 3
  this.maxColumns = 12
  this.maxRows = 12
  this.minTileSize = 60
  this.maxTileSize = 120
};

(function () {
  const settings = new DefaultBoardGameSettings()
  tileSizeInput.setAttribute('min', settings.minTileSize)
  tileSizeInput.setAttribute('max', settings.maxTileSize)
  rowsInput.setAttribute('min', settings.rows)
  rowsInput.setAttribute('max', settings.maxRows)
  columnsInput.setAttribute('min', settings.columns)
  columnsInput.setAttribute('max', settings.maxColumns)

  addNewBoardInstance('default')
})();


// all events in app 
events()
function events() {
  parentApplyBtn.addEventListener('click', () => {
    oldSettings = {
      tileSize: tileSizeInput.value,
      rows: rowsInput.value,
      columns: columnsInput.value
    }
  }, true)

  applyButton.addEventListener('click', (event) => {
    event.preventDefault();
    updateControls();
  })

  newBoardButton.addEventListener('click', (event) => {
    event.preventDefault();
    addNewBoardInstance()
  })

  boardGamesSelect.addEventListener('change', () => {
    changeControls()
  })
  document.querySelector('.gameBoard').addEventListener('click', (event) => {
    checkForTileValidity(event.target.innerText, event.target.innerText.search('\t'))
  })
}

function updateControls() {
  const activeBoardGame = boardGamesSelect.value
  const boardGamesKey = Object.keys(boards)
  let board; // 

  boardGamesKey.forEach(key => {
    if (activeBoardGame === key) {
      board = boards[key]
    }
  });

  if (checkNewSettings(board.settings)) {
    board.settings.rows = rowsInput.value
    board.settings.columns = columnsInput.value
    board.settings.tileSize = tileSizeInput.value
    board.instance.update(board.settings) // add or remove cols & rows
    updateStyles()
  }
}


function changeControls() {
  const activeBoardGame = boardGamesSelect.value
  const boardGamesKey = Object.keys(boards)

  boardGamesKey.forEach(key => {
    if (activeBoardGame === key) {
      boards[key].instance.continue()
      rowsInput.value = boards[key].settings.rows
      columnsInput.value = boards[key].settings.columns
      tileSizeInput.value = boards[key].settings.tileSize
    }
  });
}

function addExistBoardGamesToSelectElement(type) {
  boardGamesSelect.innerHTML = `` // clean select input
  const array = Object.keys(boards) // get all keys in object

  const selectedItem = type ? 0 : array[array.length - 1] // if new board game added by user the last option in select input change yo 
  array.forEach((key) => {
    boardGamesSelect.innerHTML += `
      <option value="${key}" ${selectedItem == key ? 'selected' : ''}>${key}</option>
    `
  });

  changeControls()
}

function addNewBoardInstance(type) {
  boards['board' + boardCounter] = {
    instance: new BoardGame.BoardGame(new DefaultBoardGameSettings),
    settings: new DefaultBoardGameSettings
  }
  boards['board' + boardCounter].instance.initialize()
  boardCounter++
  addExistBoardGamesToSelectElement(type)
}


function checkNewSettings(newSettings) {
  let status = false
  Object.keys(oldSettings).forEach(key => {
    if (oldSettings[key] != newSettings[key]) status = true
  });

  return status
} // check for any changes if true updateSettings() work fine


function updateStyles() {
  document.querySelectorAll('td').forEach(element => {
    element.style.width = tileSizeInput.value + 'px'
  });
}

function checkForTileValidity(text, status) {
  if (status == -1) {
    const activeBoard = boardGamesSelect.value
    boards[activeBoard].instance.play(text)
  }
}