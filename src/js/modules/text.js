const modals = () => {
    const bindModals = (triggerSelector, modalSelector, closeSelector, clickOverlay = true) => {
        const trigger = document.querySelector(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');


        trigger.addEventListener('click', () => {
            modal.style.display = 'block'

            windows.forEach(item => {
                item.style.display = 'none'
            })

            document.body.style.overflow = '';
        })
        

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'hidden'
        })
    }
}