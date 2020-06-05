const scrolling = (upSelector) => {

    const upElem = document.querySelector(upSelector)

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650){
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut')
        }else{
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });


    const links = document.querySelectorAll('[href^="#"]'),
          speed = 0.5;

    links.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault();

            let scrollTop = document.documentElement.scrollTop,
                  hash = this.hash,
                  toBlock = document.querySelector(hash).getBoundingClientRect().top,
                  start = null;

            requestAnimationFrame(step);

            function step(time){
                if(start === null){
                    start = time
                }

                let progress = time - start,
                    r =  toBlock < 0 ? Math.max(scrollTop - progress / speed, toBlock + scrollTop): Math.min(scrollTop + progress / speed, toBlock + scrollTop);

                document.documentElement.scrollTo(0, r);

                if(r !== toBlock + scrollTop){
                    requestAnimationFrame(step)
                }else{
                    location.href = hash;
                }

            }

        })
    })









    /* const calcScroll = () => {

        let scrollTop = Math.round(document.documentElement.scrollTop || document.body.scrollTop);

        upElem.addEventListener('click', function(e){
            if(this.hash !== ''){
                e.preventDefault();
                let hashEl = document.querySelector(this.hash),
                    hashElTop = 0;

                while(hashEl.offsetParent){
                    hashElTop += hashEl.offsetTop;
                    hashEl = hashEl.offsetParent;
                }

                smoothScroll(scrollTop,hashElTop,this.hash)

            }
        })
    }

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;

        if(to > from){
            speed = 30
        }else{
            speed = -30
        }

        let move = setInterval(function(){
            let scrollTop = Math.round(document.body.scrollTop || document.documentElement.scrollTop);

            if(prevScrollTop === scrollTop || (to > from && scrollTop >= to) || (to < from && scrollTop <= to)){
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            }else{
                document.body.scrollTop += speed;
                document.documentElement.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    }

    calcScroll(); */
}


export default scrolling;