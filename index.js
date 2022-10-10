const navToggle = document.getElementsByClassName("nav-toggle")[0]
const navLinks = document.getElementsByTagName("nav")[0]
const logoImg = document.getElementById("logo__img")
const logoAside = document.getElementsByTagName("aside")[0]

setDisplayedImage()

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

function setDisplayedImage(){
    console.log(window.innerWidth)
    // alert(window.innerWidth.toString())
    if (window.innerWidth > 600){
        console.log("big")
        const aboutImg = document.getElementsByClassName("bigScreen")[0]
        aboutImg.classList.remove("hide")
        aboutImg.classList.add("display")
        const aboutImg2= document.getElementsByClassName("smallScreen")[0]
        aboutImg2.classList.remove("display")
        aboutImg2.classList.add("hide")
    } else {
        console.log("small")
        const aboutImg = document.getElementsByClassName("smallScreen")[0]
        aboutImg.classList.remove("hide")
        aboutImg.classList.add("display")
        const aboutImg2 = document.getElementsByClassName("bigScreen")[0]
        aboutImg2.classList.remove("display")
        aboutImg2.classList.add("hide")
    }
}

let timeout = false // holder for timeout id

// window.resize event listener
window.addEventListener('resize', function() {
  // clear the timeout
  clearTimeout(timeout);
  // start timing for event "completion"
  timeout = setTimeout(setDisplayedImage, 500);
});
