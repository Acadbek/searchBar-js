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
let open = document.querySelector('.open')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')
close.addEventListener('click', () => {
    modal.style.display = 'none'
})

open.addEventListener('click', () => {
    modal.style.opacity = 1,
    modal.style.transition = 'all 1s'
})


let modalInput = document.querySelector('#input')
console.log(modalInput.value)
let modalInputValue = document.createElement('div')
