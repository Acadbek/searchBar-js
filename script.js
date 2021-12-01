let input = document.querySelectorAll('.input');
input.forEach((element, index) => {
    element.addEventListener('change', () => {
        let values = element.value
        let newsCound = document.createElement('div');
        let count = document.querySelector('.count');
        if (index == 0) {
            newsCound.innerHTML = values;
            count.appendChild(newsCound)
            if(values.nodeValue.length == 0) {
                alert('skjkkjddskjskj')
            }
        }
    })
});

let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    console.log('hello')
})

let modal = document.querySelector('.modal')
let close = document.querySelector('.close')

close.addEventListener('click', () => {
    modal.classList.add('hiddenModal')
    console.log('hello')
})