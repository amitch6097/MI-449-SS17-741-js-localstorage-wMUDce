var dayTime

function init () {
  dayTime = window.localStorage.getItem('local_day')
  var visited = window.localStorage.getItem('visit_num')

  if (isNaN(visited) || visited === null) {
    visited = 1
    window.localStorage.setItem('visit_num', visited)
  } else {
    visited = parseInt(visited) + 1
    window.localStorage.setItem('visit_num', visited)
  }

  document.getElementById('visited').innerHTML = 'You have visited this site ' + visited + ' times.'

  if (dayTime === 'true') {
    dayTime = true
  } else if (dayTime === 'false') {
    dayTime = false
  } else {
    dayTime = true
    window.localStorage.setItem('local_day', dayTime)
  }
  initButton()
  initBackground()
}

function initButton () {
  var changeButton = document.getElementById('submit_button')
  if (dayTime) {
    changeButton.value = 'Set to Night'
    changeButton.setAttribute('class', 'day-theme')
  } else {
    changeButton.value = 'Set to Day'
    changeButton.setAttribute('class', 'night-theme')
  }
}

function initBackground () {
  if (dayTime) {
    document.body.setAttribute('class', 'day-theme')
  } else {
    document.body.setAttribute('class', 'night-theme')
  }
}

function handleClick () {
  dayTime = !dayTime
  window.localStorage.setItem('local_day', dayTime)
  initButton()
  initBackground()
}

init()
