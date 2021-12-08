// let input = document.querySelectorAll('.input');
// input.forEach((element, index) => {
//     element.addEventListener('change', () => {
//         let values = element.value
//         let newsCound = document.createElement('div');
//         let count = document.querySelector('.count');
//         if (index == 0) {
//             newsCound.innerHTML = values;
//             count.apls




// pendChild(newsCound)
// //             if(values.nodeValue.length == 0) {
// //                 alert('skjkkjddskjskj')
// //             }
        
// //     })
// // });
// let open = document.querySelector('.open')
// let modal = document.querySelector('.modal')
// let close = document.querySelector('.close')
// close.addEventListener('click', () => {
//     modal.style.opacity = '0'
// })

// open.addEventListener('click', () => {
//     modal.style.opacity = '1',
// })


// let modalInput = document.querySelector('#input')
// console.log(modalInput.value)
// let modalInputValue = document.createElement('div')


// const num = 10;
// num == 10 ? console.log('10') : console.log('yoq')

// let r = 3;

// r == 3 ? console.log('3') : console.log('yoq')

// let e = 1
// e == 2 ? console.log('2') : console.log('yoq')

// let t = 3; 
// t == 2 ? alert('hello') : console.log('not')

// "use strict"

// let arr = [1,2,3,4]

// let box = document.querySelectorAll('.box');
// box.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         // if(!item.classList.contains('color')){
//         //     item.classList.add('color')
//         // } else{
//         //     item.classList.add('color')
//         // }
//         if(item.classList.contains('color')) {
//             item.classList.remove('color')
//             console.log('1')
//         }else{
//             console.log('2')
//             item.classList.add('color')
//         }
//     })
// })


const items = document.querySelector('.items')
const searchInput = document.getElementById('search');

let users = []

 const getItem = () => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => {res.json()
        .then(res => {
            users = res
            viewResults(users)
        })
        .catch(err => console.log('error'));
    })
 }

 searchInput.addEventListener('input', e => {
     const element  = e.target.value.toLowerCase()
     console.log(element)

     const searchFunc = users
        .filter(user => user.name
        .toLowerCase()
        .includes(element))

     viewResults(searchFunc)
 })


 const viewResults = (arr) => {
     let output = '';
     arr.forEach(({name, username}) => (output += `
        <tr>
            <td>
                <div class="results">
                    <div>
                        <h1>
                            ${name}
                        </h1>
                    </div>
                    <div>
                        <p>
                            ${username}
                        </p>
                    </div>
                </div>
            </td>
        </tr>
     `))
     items.innerHTML = output
 }

 document.addEventListener('DOMContentLoaded',  getItem)