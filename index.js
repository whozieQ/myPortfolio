const navToggle = document.getElementsByClassName("nav-toggle")[0]
const navLinks = document.getElementsByTagName("nav")[0]

navToggle.addEventListener("click",(e)=>{
    document.body.classList.toggle('nav-open')
})
navLinks.addEventListener("click",(e)=>{
    if (e.target.classList.contains("nav__link")){
    document.body.classList.remove('nav-open')}
})