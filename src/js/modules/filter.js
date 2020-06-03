const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          btns = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnBoy = menu.querySelector('.guy'),
          markWrapper = document.querySelector('.portfolio-wrapper'),
          markAll = markWrapper.querySelectorAll('.all'),
          markLovers = markWrapper.querySelectorAll('.lovers'),
          markGirl = markWrapper.querySelectorAll('.girl'),
          markGuy = markWrapper.querySelectorAll('.guy'),
          markChef = markWrapper.querySelectorAll('.chef'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn')
        })

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(markType){
            markType.forEach(item => {
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn');
            })
        }else{
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn')
        }
    }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            switch (btn) {
                case btnAll:
                    typeFilter(markAll)
                    break;
                case btnLovers:
                    typeFilter(markLovers)
                    break;
                case btnChef:
                    typeFilter(markChef)
                    break;
                case btnGirl:
                    typeFilter(markGirl)
                    break;
                case btnBoy:
                    typeFilter(markGuy)
                    break;
                case btnGirl:
                    typeFilter(markGirl)
                    break;   
                default:
                    typeFilter();
                    break;
            }
        })
    })

    menu.addEventListener('click', e => {
        if(e.target && e.target.tagName === 'LI'){
            btns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active')
        }
    })

}




export default filter;