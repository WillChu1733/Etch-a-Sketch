// selecting the first element with the class 'container', assigning it to variable container
const container = document.querySelector('.container')
const num = 16
const resetButton = document.querySelector('.reset-button')

const createDiv = () => {
  for (let i = 0; i < num; i++) {
    const gridRow = document.createElement('div')
    gridRow.classList.add('grid-row')

    for (let j = 0; j < num; j++) {
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      gridBox.addEventListener('mouseenter', mouseEnter)
      // grid-row becomes parent of grid-box
      gridRow.appendChild(gridBox)
    }
    container.appendChild(gridRow)
  }
}

function mouseEnter(event) {
  event.target.style.backgroundColor = 'black'
}

resetButton.addEventListener('click', () => {
  let userSize = Number(prompt('What Dimensions'))

  while (userSize > 100) {
    userSize = Number(prompt('What Dimensions, less than 100'))
  }
  createDiv(userSize)
})

createDiv()
