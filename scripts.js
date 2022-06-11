let greetings = document.querySelector('#greetings')
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
    if(e.type === 'click') {
        modal.style.display = 'none'
        greetings.style.display = 'block'
    }
}

setTimeout(() => {greetings.style.display = 'block'}, 1000)

about.addEventListener('mouseenter', setColorBorder)
about.addEventListener('mouseleave', setColorBorder)

skill.addEventListener('mouseenter', setColorBorder)
skill.addEventListener('mouseleave', setColorBorder)

contacts.addEventListener('mouseenter', setColorBorder)
contacts.addEventListener('mouseleave', setColorBorder)


skill.addEventListener('click', () => {
    modal.style.display = 'block'
    greetings.style.display = 'none'
    header.textContent = skill.textContent}
)

span.addEventListener('click', closeModal)

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none'
      greetings.style.display = 'block'
    }
}