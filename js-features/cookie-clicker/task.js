const p = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')
img.onclick = () => {
    if (Number(p.textContent) % 2 == 0) {
        img.width += 50
        i = 1
    } else img.width -= 50

    p.textContent = Number(p.textContent) + 1
}