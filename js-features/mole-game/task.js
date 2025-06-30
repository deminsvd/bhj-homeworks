(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
})();

const p1 = document.getElementById('dead')
const p2 = document.getElementById('lost')

const hole1 = document.getElementById('hole1')
ishole(hole1)

const hole2 = document.getElementById('hole2')
ishole(hole2)

const hole3 = document.getElementById('hole3')
ishole(hole3)

const hole4 = document.getElementById('hole4')
ishole(hole4)

const hole5 = document.getElementById('hole5')
ishole(hole5)

const hole6 = document.getElementById('hole6')
ishole(hole6)

const hole7 = document.getElementById('hole7')
ishole(hole7)

const hole8 = document.getElementById('hole8')
ishole(hole8)

const hole9 = document.getElementById('hole9')
ishole(hole9)

function ishole(hole) {
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            p1.textContent = Number(p1.textContent) + 1
        } else {
            p2.textContent = Number(p2.textContent) + 1
        }
        

        if (p1.textContent == 10) {
            alert('Победа!')
        }

        if (p2.textContent ==5) {
            alert('Вы проиграли!')
        }

    }
}