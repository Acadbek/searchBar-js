let input = document.querySelectorAll('.input');
input.forEach((element, index) => {
    element.addEventListener('change', () => {
        let values = element.value
        let newsCound = document.createElement('div');
        let count = document.querySelector('.count');
        if (index == 0) {
            newsCound.innerHTML = values;
            count.appendChild(newsCound)
            if(values == 'Salom') {
                alert('oooo Salom boldi')
            }
        }
    })
});