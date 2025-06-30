const p = document.getElementById('timer')
setInterval(() => {
    p.textContent = Number(p.textContent) - 1
    if (p.textContent == 0) {
    alert('Вы победили в конкурсе!')
}
}, 1000)