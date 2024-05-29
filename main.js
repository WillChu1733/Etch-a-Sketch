const container = document.querySelector('.container')
const num = 16

const createDiv = () => {
  for (let i = 0; i < num; i++) {
    const row = document.createElement('div')
    row.classList.add('grid-row')

    for (let j = 0; j < num; j++) {
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      row.appendChild(gridBox)
    }
    container.appendChild(row)
  }
}

createDiv()
