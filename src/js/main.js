import modals from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms'
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreCards from './modules/showMoreCards';


window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    modals();
    slider('.feedback-slider-item','horizontal','.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name = name]');
    checkTextInputs('[name = message]');
    showMoreCards('.button-styles', '#styles .row')
})


