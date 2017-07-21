document.addEventListener('DOMContentLoaded', function (event) {

    var slideManager = document.querySelector('.main-slider-cnt');
    var counter = 4;
    var previousSlide = document.querySelector('.main-slider-prev');
    var nextSlide = document.querySelector('.main-slider-next');
    previousSlide.addEventListener('click',function (e) {
        e.preventDefault();
            slideManager.children[counter].classList.toggle('hidden');
            counter--;
            if(counter < 0){
                counter = 4;
            }
            slideManager.children[counter].classList.toggle('hidden');
    });
    nextSlide.addEventListener('click',function (e) {
        e.preventDefault();
        slideManager.children[counter].classList.toggle('hidden');
        counter++;
        if(counter > 4){
            counter = 0;
        }
        slideManager.children[counter].classList.toggle('hidden');
    })
    var timeout = setInterval(function () {

        var op = 0.01;  // initial opacity
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            op += op * 0.1;
        }, 20);
        
        //
        counter++;
        if(counter > 4){
            counter = 0;
        }


    }, 3000);
    timeout;

});
