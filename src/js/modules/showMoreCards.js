import {getResources} from '../services/requests';

const showMoreCards = (triggerSelector, parentCards) => {
    const btn = document.querySelector(triggerSelector);
    
    btn.addEventListener('click', function(){
        getResources('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => console.log(error)) 

        this.remove()
    });

    function createCards(responce){
        responce.forEach((item) => {
            const card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${item.src} alt>
                    <h4>${item.title}</h4>
                    <a href="${item.link}">Подробнее</a>
                </div>
            `
            document.querySelector(parentCards).appendChild(card)
        })
    }
}

export default showMoreCards;




