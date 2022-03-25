// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  // Auth Event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  // Event listeners for box clicks
  $('#1').on('click',)
  $('#2').on('click',)
  $('#3').on('click',)
  $('#4').on('click',)
  $('#5').on('click',)
  $('#6').on('click',)
  $('#7').on('click',)
  $('#8').on('click',)
  $('#9').on('click',)
})
