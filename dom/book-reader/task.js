const fonts = document.querySelectorAll('.font-size')
const artc = document.querySelector('.book')
const arr = [...fonts]

for (let fontel of arr) {
        
    fontel.addEventListener('click', () => {
    fonts[0].className = 'font-size font-size_small'
    fonts[1].className = 'font-size font-size'
    fonts[2].className = 'font-size font-size_big'
     
    if(arr.indexOf(fontel) == 0) {
        fonts[0].className = 'font-size font-size_small_active'
        artc.className = 'book book_fs-small'
    } else if (arr.indexOf(fontel) == 1) {
        fonts[1].className = 'font-size font-size_active'
        artc.className = 'book'
    } else {
        fonts[2].className = 'font-size font-size_big_active'
        artc.className = 'book book_fs-big'
    }

    })
}