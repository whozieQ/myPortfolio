const navToggle = document.getElementsByClassName("nav-toggle")[0]
const navLinks = document.getElementsByTagName("nav")[0]
const logoImg = document.getElementById("logo__img")
const logoAside = document.getElementsByTagName("aside")[0]

document.body.addEventListener("click",(e)=>{
    if (!e.target.classList.contains("nav-toggle") &&
        !e.target.classList.contains("fa-bars")){
       if (document.body.classList.contains('nav-open'))
            document.body.classList.remove('nav-open')
    }
    if (logoAside.classList.contains("aside-open") &&
        e.target.id != "logo__img"){
        logoAside.classList.remove("aside-open")
    }
})

navToggle.addEventListener("click",(e)=>{
    document.body.classList.toggle('nav-open')
})
navLinks.addEventListener("click",(e)=>{
    if (e.target.classList.contains("nav__link")){
    document.body.classList.remove('nav-open')}
})
logoImg.addEventListener("click",(e)=>{
   logoAside.classList.toggle("aside-open")
})