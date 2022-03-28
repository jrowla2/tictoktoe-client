'use strict'

// const store = require('../store.js')
const gameApi = require('../auth/api.js')
let move = 1
let play = true
let turn = 'x'

const onClickBox = function (event) {
  console.log(event.target.id + ' button clicked')
  const index = $(event.target).data('cell-index')
  if ($(this).text() === '' && play) {
    if (turn === 'x') {
      $(this).append('X')
    } else {
      $(this).append('O')
    }

    move++

    if (findWinner() !== -1 && findWinner() !== '') {
      play = false
      console.log(findWinner())

      if (findWinner() === 'X') {
        $('#result').text('X is Winner')
        $('#result').css('color', 'green')
        $('#result').css('font-size', '40px')
      } else if (findWinner() === 'O') {
        $('#result').text('O is Winner')
        $('#result').css('color', 'blue')
        $('#result').css('font-size', '40px')
      }
    } else if (findWinner() === -1 && move > 9) {
      $('#result').text('Tie Game')
      $('#result').css('color', 'red')
      $('#result').css('font-size', '40px')
    }
  }
  const gamePlay = {
    game: {
      cell: {
        index: index,
        value: turn
      },
      over: findWinner() !== ''
    }
  }
  console.log(gamePlay)
  gameApi.updateGame(gamePlay)
  if (turn === 'x') {
    turn = 'o'
  } else { turn = 'x' }
}

const onRestart = function (event) {
  console.log('restart clicked')
  // clear gameBoard
  $('.box').text('')
  $('#result').text('')
  play = true
  move = 1
}

function findWinner () {
  const box0 = $('#box0').text()
  const box1 = $('#box1').text()
  const box2 = $('#box2').text()
  const box3 = $('#box3').text()
  const box4 = $('#box4').text()
  const box5 = $('#box5').text()
  const box6 = $('#box6').text()
  const box7 = $('#box7').text()
  const box8 = $('#box8').text()

  // check rows first
  if ((box0 === box1) && (box1 === box2)) {
    return box2
  } else if ((box3 === box4) && (box4 === box5)) {
    return box5
  } else if ((box6 === box7) && (box7 === box8)) {
    return box8
  }
  // check columns
  if ((box0 === box3) && (box3 === box6)) {
    return box6
  } else if ((box1 === box4) && (box4 === box7)) {
    return box7
  } else if ((box2 === box5) && (box5 === box8)) {
    return box8
  }
  // check diagonals
  if ((box0 === box4) && (box4 === box8)) {
    return box8
  } else if ((box2 === box4) && (box4 === box6)) {
    return box6
  }
  // tie or no winner
  return -1
}

module.exports = {
  onClickBox,
  onRestart
}
