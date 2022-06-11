function Skill() {
    return(
    <div id="skillMore">
        <a href="https://stepik.org/cert/1415848" target="_blank"><img src="img/html5_css3.jpg" id="htmlcss"></img></a>
        <a href="https://www.udemy.com/certificate/UC-d21429ca-ccf5-4e96-aeb0-fb904466c007/" target="_blank"><img src="img/js.jpg" id="js"></img></a>
        <img src="img/React.jpg" id="react"></img>
        <div id="skillComment"><h3>Изучаемые технологии на данный момент</h3></div>
        <div id="html1" style = {{display:'none'}}><h3>HTML5/CSS3 (Курс пройден)</h3></div>
        <div id="js1" style = {{display:'none'}}><h3>JavaScript (Курс пройден)</h3></div>
        <div id="react1" style = {{display:'none'}}><h3>React (В процессе изучения...)</h3></div>     
    </div>)
}

ReactDOM.render(
    <Skill />,
    document.querySelector('#root')
    
)

let js = document.querySelector('#js')
let react = document.querySelector('#react')
let htmlcss = document.querySelector('#htmlcss')
let skillComment = document.querySelector('#skillComment')
let html1 = document.querySelector('#html1')
let js1 = document.querySelector('#js1')
let react1 = document.querySelector('#react1')

js.addEventListener('mouseenter', setColorBorder)
js.addEventListener('mouseleave', setColorBorder)

react.addEventListener('mouseenter', setColorBorder)
react.addEventListener('mouseleave', setColorBorder)

htmlcss.addEventListener('mouseenter', setColorBorder)
htmlcss.addEventListener('mouseleave', setColorBorder)


htmlcss.addEventListener('mouseenter', () => {
    skillComment.style.display = 'none'
    html1.style.display = 'block'
})

htmlcss.addEventListener('mouseleave', () => {
    skillComment.style.display = 'block'
    html1.style.display = 'none'
})

js.addEventListener('mouseenter', () => {
    skillComment.style.display = 'none'
    js1.style.display = 'block'
})

js.addEventListener('mouseleave', () => {
    skillComment.style.display = 'block'
    js1.style.display = 'none'
})

react.addEventListener('mouseenter', () => {
    skillComment.style.display = 'none'
    react1.style.display = 'block'
})

react.addEventListener('mouseleave', () => {
    skillComment.style.display = 'block'
    react1.style.display = 'none'
})
