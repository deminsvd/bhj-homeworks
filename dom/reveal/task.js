const blocks = document.querySelectorAll('.reveal')

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect()

    if (bottom < 0) {
        return false
    }

    if (top > window.innerHeight) {
        return false
    }
    return true
}

for (let block of blocks) {
    setInterval(() => {
        if (isVisible(block)) {
            block.className = 'reveal reveal_active'
        } else {
            block.className = 'reveal'
        }
    }, 1000)
}