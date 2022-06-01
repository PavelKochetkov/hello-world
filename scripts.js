// var name = document.querySelector('#name')
let about = document.querySelector('#about')
let skill = document.querySelector('#skill')
let contacts = document.querySelector('#contacts')
let span = document.querySelector('#close')
let header = document.querySelector('#header')


const setColorBorder = (e) => {
    if(e.type === 'mouseenter') {e.target.style.border = '3px solid orange'}
    else if(e.type === 'mouseleave') {e.target.style.border = '3px solid rgba(255, 255, 255, 0.8)'}
}

const closeModal = (e) => {
    if(e.type === 'click') {modal.style.display = 'none'}
}

about.addEventListener('mouseenter', setColorBorder)
about.addEventListener('mouseleave', setColorBorder)

skill.addEventListener('mouseenter', setColorBorder)
skill.addEventListener('mouseleave', setColorBorder)

contacts.addEventListener('mouseenter', setColorBorder)
contacts.addEventListener('mouseleave', setColorBorder)

about.addEventListener('click', () => {modal.style.display = 'block'})

skill.addEventListener('click', () => {modal.style.display = 'block'})

contacts.addEventListener('click', () => {modal.style.display = 'block'})

span.addEventListener('click', closeModal)

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
}




// about.addEventListener('mouseenter', () => {
//     about.style.border = '3px solid orange'
//     document.querySelector('#name').style.display = 'none'
//     var name = document.querySelector('#name')
//     name.style.display = 'none'
//     name.insertAdjacentHTML('afterbegin', '<div id ="two">HELLO</div>')
    
// })

// skill.addEventListener('mouseenter', () => {
//     skill.style.border = '3px solid orange'
//     document.querySelector('#name').style.display = 'none'
// })

// contacts.addEventListener('mouseenter', () => {
//     contacts.style.border = '3px solid orange'
//     document.querySelector('#name').style.display = 'none'
    
// })

// about.addEventListener('mouseleave', () => {
//     document.querySelector('#name').style.display = ''
//     about.style.border = '3px solid rgba(255, 255, 255, 0.8)'
// })

// skill.addEventListener('mouseleave', () => {
//     document.querySelector('#name').style.display = ''
//     skill.style.border = '3px solid rgba(255, 255, 255, 0.8)'
// })

// contacts.addEventListener('mouseleave', () => {
//     document.querySelector('#name').style.display = ''
//     contacts.style.border = '3px solid rgba(255, 255, 255, 0.8)'
// })