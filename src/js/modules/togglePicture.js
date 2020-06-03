const togglePicture = (blockSelector) => {
    const blocks = document.querySelectorAll(blockSelector);

    function showPicture(block){
        const img = block.querySelector('img');
        img.src = img.src.slice(0,-4) + '-1.png';
        block.querySelectorAll('p :not(.sizes-hit)').forEach(item => item.style.display = 'none')
    }

    function hidePicture(block){
        const img = block.querySelector('img');
        img.src = img.src.slice(0,-6) + '.png';
        block.querySelectorAll('p').forEach(item => item.style.display = 'block')
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showPicture(block)
        })
        block.addEventListener('mouseout', () => {
            hidePicture(block)
        })
    })
}

export default togglePicture;