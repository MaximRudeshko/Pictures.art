import modals from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms'
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreCards from './modules/showMoreCards';
import calc from './modules/calc';
import changeFormDataState from './modules/changeFormState'
import filter from './modules/filter';
import togglePicture from './modules/togglePicture';
import accordeon from './modules/accordeon';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';



window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    let formState = {}

    modals();
    slider('.feedback-slider-item','horizontal','.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms(formState);
    mask('[name="phone"]');
    checkTextInputs('[name = name]');
    checkTextInputs('[name = message]');
    showMoreCards('.button-styles', '#styles .row');
    calc('#size','#material','#options','.promocode','.calc-price');
    changeFormDataState(formState);
    filter();
    togglePicture('.sizes-block')
    accordeon('.accordion-heading', '.accordion-block');
    burger('.burger', '.burger-menu');
    scrolling('.pageup');
    drop();
})


