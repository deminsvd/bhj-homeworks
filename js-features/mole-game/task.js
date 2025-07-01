
const counterDead = document.getElementById('dead')
const counterLost = document.getElementById('lost')

for (let index = 1; index <= 9; index++) {
  const hole = getHole(index)
  ishole(hole)
}

function getHole(index) {
  let holeName = 'hole' + index
  const hole = document.getElementById(holeName)
  return hole
}

function ishole(hole) {
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            counterDead.textContent = Number(counterDead.textContent) + 1
        } else {
            counterLost.textContent = Number(counterLost.textContent) + 1
        }
        

        if (counterDead.textContent == 10) {
            alert('Победа!')
            counterDead.textContent = 0
            counterLost.textContent = 0
        }

        if (counterLost.textContent ==5) {
            alert('Вы проиграли!')
            counterDead.textContent = 0
            counterLost.textContent = 0
        }

    }
}