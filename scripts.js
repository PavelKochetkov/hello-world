let greetings = document.querySelector('#greetings')
let about = document.querySelector('#about')
let skill = document.querySelector('#skill')
let contacts = document.querySelector('#contacts')
let span = document.querySelector('#close')
let header = document.querySelector('#header')
let aboutFull = document.querySelector('#aboutFull')
let closeAb = document.querySelector('#closeAbout')

const setColorBorder = (e) => {
    if(e.type === 'mouseenter') {e.target.style.border = '3px solid orange', e.target.style.background = 'SlateGray',
    e.target.style.boxShadow = '0px 2px 2px 2px azure'}
    else if(e.type === 'mouseleave') {e.target.style.border = '3px solid rgba(255, 255, 255, 0.8)', 
    e.target.style.background = 'rgba(0, 0, 0, 0.250)', e.target.style.boxShadow = 'none'
    }
}

const closeModal = (e) => {
    if(e.type === 'click') {
        modal.style.display = 'none'
        greetings.style.display = 'block'
    }
}

const closeAbout = (e) =>{
    if(e.type === 'click'){
        aboutFull.style.display = 'none'
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
    aboutFull.style.display = 'none'
    header.textContent = skill.textContent}
)

span.addEventListener('click', closeModal)

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none'
      greetings.style.display = 'block'
    }
}

about.addEventListener('click', () => {
    aboutFull.style.display = 'block'
    greetings.style.display = 'none'
})

closeAb.addEventListener('click', closeAbout)