const p = document.getElementById('timer')
let timer = setInterval(() => {
    p.textContent = Number(p.textContent) - 1
    if (p.textContent == 0) {
    alert('Вы победили в конкурсе!')
    clearTimeout(timer)
}
}, 1000)