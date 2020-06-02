const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);
    let sum;

    const calcSum = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value))
    

        if(sizeBlock.value == '' || materialBlock.value == ''){
            resultBlock.textContent = 'Пожалуйста выберите размер и материал'
        }else if(promocodeBlock.value === 'IWANTPOPART'){
            resultBlock.textContent = Math.round(sum * 0.7)
        }else{
            resultBlock.textContent = sum
        }
    }

    sizeBlock.addEventListener('change', calcSum);
    materialBlock.addEventListener('change', calcSum);
    optionsBlock.addEventListener('change', calcSum);
    promocodeBlock.addEventListener('input', calcSum);
    
}
export default calc;