// selecting the first element with the class 'container', assigning it to variable container
const container = document.querySelector('.container')
const num = 16

const createDiv = () => {
  for (let i = 0; i < num; i++) {
    const gridRow = document.createElement('div')
    gridRow.classList.add('grid-row')

    for (let j = 0; j < num; j++) {
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      // grid-row becomes parent of grid-box
      gridRow.appendChild(gridBox)
    }
    container.appendChild(gridRow)
  }
}

createDiv()
