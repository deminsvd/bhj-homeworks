const but = document.querySelector('.dropdown__value')
const drdlist = document.querySelector('.dropdown__list')
const items = document.querySelectorAll('.dropdown__link')

but.addEventListener('click', onClick1)

for (let item of items) {
    item.addEventListener('click', onClick2)
}

function onClick1() {
    if (drdlist.className == 'dropdown__list') {
        drdlist.className= 'dropdown__list dropdown__list_active'

    }
}

function onClick2() {
        but.textContent = this.textContent
        drdlist.className = 'dropdown__list'
        
}