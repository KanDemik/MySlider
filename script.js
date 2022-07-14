const images = document.querySelectorAll('.slider__holder img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;


function init (){
    console.log('resize');
    width = document.querySelector('.slider__holder').offsetWidth;
    sliderLine.style.width = width*images.lentgh + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    console.log(width);
    rollSlider();
}

window.addEventListener('resize', init)
init()

document.querySelector('.slider__btn-prev').addEventListener('click', function() {
    count--
    if (count < 0) {
        count = images.length - 1;
    };
    rollSlider();
})

document.querySelector('.slider__btn-next').addEventListener('click', function() {
    count++
    if (count >= images.length) {
        count = 0;
    };
    rollSlider();
})


function rollSlider() {
    sliderLine.style.transform = 'translate(-'+count*width+ 'px)';
}