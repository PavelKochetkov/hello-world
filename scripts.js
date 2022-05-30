// var name = document.querySelector('#name')
var about = document.querySelector('#about')
var skill = document.querySelector('#skill')
var contacts = document.querySelector('#contacts')

// function setColor(e) {
//     if(e.type === 'mouseover') {e.target.style.backgroundColor = 'red'}
//     else if(e.type === 'mouseout') {e.target.style.backgroundColor = 'blue'}
// }

// about.addEventListener('mouseover', setColor)

about.addEventListener('mouseenter', () => {
    about.style.border = '3px solid orange'
    document.querySelector('#name').style.display = 'none'
    // var name = document.querySelector('#name')
    // name.style.display = 'none'
    // name.insertAdjacentHTML('afterbegin', '<div id ="two">HELLO</div>')
    
})

skill.addEventListener('mouseenter', () => {
    skill.style.border = '3px solid orange'
    document.querySelector('#name').style.display = 'none'
})

contacts.addEventListener('mouseenter', () => {
    contacts.style.border = '3px solid orange'
    document.querySelector('#name').style.display = 'none'
    
})

about.addEventListener('mouseleave', () => {
    document.querySelector('#name').style.display = ''
    about.style.border = '3px solid rgba(255, 255, 255, 0.8)'
})

skill.addEventListener('mouseleave', () => {
    document.querySelector('#name').style.display = ''
    skill.style.border = '3px solid rgba(255, 255, 255, 0.8)'
})

contacts.addEventListener('mouseleave', () => {
    document.querySelector('#name').style.display = ''
    contacts.style.border = '3px solid rgba(255, 255, 255, 0.8)'
})