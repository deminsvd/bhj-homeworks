const tubs = document.querySelectorAll('.tab')
const conts = document.querySelectorAll('.tab__content')
let j = 0;
const arr = [...tubs]

for (let tub of arr) {
    tub.addEventListener('click', () => {
    tubs[j].className = 'tab'
    conts[j].className = 'tab__content'
    j = arr.indexOf(tub)
    tubs[j].className = 'tab tab_active'
    conts[j].className = 'tab__content tab__content_active'

    })
}