const counterNumber = document.querySelector('.counterNumber')
const addBtn = document.querySelector('.add')
const substractButton = document.querySelector('.substract')
const buttonWrapper = document.querySelector('.buttonWrapper')

const setCounterValue = (number) => (counterNumber.textContent = number)

let currentCounterValue = 0
const counterLimit = 15
let limitReached = false

const toggleLimitReached = (toggle) => {
  if (toggle) {
    counterNumber.className = 'counterLimitReached'
  } else {
    counterNumber.className = 'counterNumber'
  }
}

buttonWrapper.addEventListener('click', (e) => {
  const buttonTargeted = e.target.className
  const prevCounterValue = currentCounterValue

  if (buttonTargeted === 'add') currentCounterValue += 1
  if (buttonTargeted === 'substract') currentCounterValue -= 1

  if (Math.abs(currentCounterValue) > counterLimit) {
    currentCounterValue = prevCounterValue
  }

  if (Math.abs(currentCounterValue) === counterLimit) {
    toggleLimitReached(true)
  } else {
    toggleLimitReached(false)
  }

  setCounterValue(currentCounterValue)
})

let isMouseDown = false
let interval

buttonWrapper.addEventListener('mousedown', (e) => {
  mouseIsDown = true
  interval = setInterval(() => {
    const buttonTargeted = e.target.className
    const prevCounterValue = currentCounterValue

    if (buttonTargeted === 'add') currentCounterValue += 1
    if (buttonTargeted === 'substract') currentCounterValue -= 1

    if (Math.abs(currentCounterValue) > counterLimit) {
      currentCounterValue = prevCounterValue
    }

    if (Math.abs(currentCounterValue) === counterLimit) {
      toggleLimitReached(true)
    } else {
      toggleLimitReached(false)
    }

    setCounterValue(currentCounterValue)
  }, 120)
})

buttonWrapper.addEventListener('mouseup', (e) => {
  mouseIsDown = false
  clearInterval(interval)
})
