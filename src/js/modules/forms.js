import {postData} from '../services/requests';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          uploads = document.querySelectorAll('[name=upload]');

    uploads.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            console.log(item.files[0]);
            const arr =  item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0,6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        })
    })

    function clearUploadInput(){
        uploads.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран'
        })
    }
    
    const message = {
        success: 'Спасибо, мы скоро с вами свяжемся!',
        loading: 'Загрузка...',
        failure: 'Ошибка',
        ok: './assets/img/ok.png',
        fail: './assets/img/fail.png',
        spinner: './assets/img/spinner.gif'
    };

    const path = {
        designer : './assets/server.php',
        question : './assets/question.php'
    }

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);
            item.classList.add('animated', 'fadeOutUp');
            setTimeout(function(){
                item.style.display = 'none'
            }, 200)

            let img = document.createElement('img');
            img.setAttribute('src', message.spinner);
            img.classList.add('animated','fadeInUp');
            statusMessage.appendChild(img);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage)

            const formData = new FormData(item);
            if(item.classList.contains('form_calc')){
                state['sum'] = document.querySelector('.calc-price').textContent;
                for(let key in state){
                    formData.append(key, state[key]);
                    console.log(formData)
                }
            }
            let api;
            item.closest('.popup-design') || item.classList.contains('form_calc') ? api = path.designer : api = path.question;
            postData(api, formData)
                .then( res =>{
                    console.log(res)
                    textMessage.textContent = message.success;
                    img.setAttribute('src', message.ok)
                }).catch(() => {
                    textMessage.textContent = message.failure;
                    img.setAttribute('src', message.fail)
                }).finally(() => {
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp')
                    }
                    ,4000);
                    item.reset();
                    clearUploadInput();
                })
        })
    })
}

export default forms