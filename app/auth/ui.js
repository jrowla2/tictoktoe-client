'use strict'

const store = require('../store.js')

// this function is hiding the auth class in html until signed in
// could probably hide in css as well to avoid flickering
// $(function () {
//   $('#auth').hide()
// })

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')

  // reset all forms
  $('form').trigger('reset')

  console.log(response)
  // store data from the response in my store object
  store.user = response.user

  // reset single form
  // $('#sign-in-form').trigger('reset')

  // these functions are toggling what classes of html are shown
  $('#unAuth').hide()
  $('#auth').show()
}

const onSignInFailure = () => {
  $('#auth-display').html('<p>Error while signing in</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>User changed password successfully</p>')

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')

  $('form').trigger('reset')
  // these functions are hiding the game and showing the log in
  $('#auth').hide()
  $('#unAuth').show()
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
