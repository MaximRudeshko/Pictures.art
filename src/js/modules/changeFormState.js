const changeFormDataState = (state) => {

    const options = document.querySelectorAll('.form_calc select');
    options.forEach(item => {
        item.addEventListener('change', () => {
            state[item.id] = item.value;
            console.log(state);
        })
    })

}

export default changeFormDataState;