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

const imgHTML = `<img class="about__img" src="img/susan1.jpg" alt="">`
const aboutImg = document.getElementsByClassName("about__img")[0]
const firstDescPara = document.getElementsByClassName("about__description")[0]
//on small screens put the img after the 1st about__description paragraph
//on larger screens put the img after the entire about__body
firstDescPara.parentNode.insertBefore(aboutImg,firstDescPara.nextSibling)