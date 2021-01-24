let sky = document.getElementById("sky");
let mountain = document.getElementById("mountain");
let hill = document.getElementById("hill");



window.addEventListener('scroll', function () {
    let width = window.innerWidth;
    if (width > 850) {
        var value = window.scrollY;
        sky.style.top = value * .5 + 'px';
        mountain.style.top = - value * .2 + 'px';
        hill.style.top = value * .15 + 'px';
    }
})
