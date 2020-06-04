const scrolling = () => {

    const upElem = document.querySelector('.pageup')

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650){
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut')
        }else{
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    const calcScroll = () => {

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

    calcScroll();
}


export default scrolling;