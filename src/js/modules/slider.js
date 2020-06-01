const slider = (slides,dir,prev,next) => {
    const items = document.querySelectorAll(slides);
    let sliderIndex = 1,
        paused;


    function showSlide(n){
        if(n > items.length){
            sliderIndex = 1
        }

        if(n < 1){
            sliderIndex = items.length
        }

        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = 'none'
        })


        items[sliderIndex - 1].style.display = 'block';
        
    }

    showSlide(sliderIndex)

    function changeSlide(n){
        showSlide(sliderIndex += n)
    }

    try{
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);
        
        prevBtn.addEventListener('click', () => {
            changeSlide(-1);
            items[sliderIndex - 1].classList.remove('slideInLeft');
            items[sliderIndex - 1].classList.add('slideInRight')
        });

        nextBtn.addEventListener('click', () => {
            changeSlide(1);
            items[sliderIndex - 1].classList.remove('slideInRight');
            items[sliderIndex - 1].classList.add('slideInLeft');
        })
    }catch(e){}

    function autoChangeSlide(){
        if(dir === 'vertical'){
            paused = setInterval(function(){
                changeSlide(1);
                items[sliderIndex - 1].classList.add('slideInDown');
            },3000)
        }else{
            paused = setInterval(function(){
                changeSlide(1);
                items[sliderIndex - 1].classList.remove('slideInRight');
                items[sliderIndex - 1].classList.add('slideInLeft');
            },3000)
        }
    }

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused)
    })

    items[0].parentNode.addEventListener('mouseleave', () => {
        autoChangeSlide()
    })


          
}

export default slider;