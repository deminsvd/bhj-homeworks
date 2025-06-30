const cases = document.querySelectorAll('.rotator__case')
let i = 0
let j = 1

setInterval(() => {
    if(i == cases.length) {
        i = 0
    }       

    if(j == cases.length) {
        j = 0
    }

    cases[i].className = 'rotator__case'
    cases[j].className = 'rotator__case rotator__case_active'
    i++
    j++
}, 1000)