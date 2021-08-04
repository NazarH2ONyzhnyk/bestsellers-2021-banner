const slider = new NSlider({
    elem: document.querySelector('.container'),
});
setInterval(() => slider.next(), 8000);