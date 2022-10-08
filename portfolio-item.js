const projectList = [
    {
        portfolioId : "1",
        title: "Movie Watchlist",
        tagline: "async API fetch",
        keyPoints: "async funtions, making REST calls, leveraging local storage, icons, bubbling events",
        description: `The movie database API required 2 async (REST) function calls in order to retrieve a list of movies
        and get details about each movie. Managing the async nature of this sequence of calls was the biggest challenge. 
        Satisfying, but not quite as tough was working out how to style the various movie data components (and account for
        sometimes missing data) in a repeating series of movie entries. And of course, storing and retrieving the movie
         list from local storage`,
        image1: "img/portfolio1.jpg",
        link: "https://whozieq-moviewatchlist.netlify.app/"

    },
    {
        portfolioId : "2",
        title: "Monster Dice",
        tagline: "classes",
        keyPoints: "making use of classes, splitting javascript across files, using randomizers, creating a game-like UX",
        description: `A major focus for this project was generating the javascript to create the little mini-game experience. 
        Fairly early on in my javascript study this was one of the first experiences with creating classes and splitting JS code 
        into multiple files. Secondary is the CSS styling where we are just starting to explore responsive sizing and layouts
        for different screen sizes and devices.`,
        image1: "img/portfolio2.jpg",
        image2: "img/portfolio2-wide.jpg",
        link: "https://whozq-rpg.netlify.app/"

    },
    {
        portfolioId : "3", 
        title: "TinDogs",
        tagline: "positioning",
        keyPoints: "forced positions, event listeners, using timers, leveraging a data file, iterating arrays, class constructors",
        description: `This mock "Tinder" for dogs introduced using custom positioning attributes for placing the reaction stamps over 
        the dog pictures as well as forcing text to appear on top of the images. This was also my first use of clickable icons. Iterating through an array and displaying array contents
        is also a pretty new skill at this point.`,
        image1: "img/portfolio3.jpg",
        image2: "img/portfolio3-wide.jpg",
        link: "https://whozq-tindog.netlify.app/"

    },
    {
        portfolioId : "4", 
        title: "Hometown Homepage",
        tagline: "flexbox",
        keyPoints: "color palettes, styling images, flexbox",
        description: `Entirely CSS focused. This project got us introduced to flexbox as we played with several
        sections each laid out differently. A secondary focus was on choosing color palettes and introducing gradients.`,
        image1: "img/portfolio4.jpg",
        link: "https://whozq-tindog.netlify.app/"

    },
    {
        portfolioId : "5", 
        title: "Unit Converter",
        tagline: "calculations",
        keyPoints: "template strings, calculations, formatting and layout, input",
        description: `A very simple unit converter introduces event listeners, accepting input and dynamically displaying new content 
        as a result of an event (button click)`,
        image1: "img/portfolio5.jpg",
        link: "https://whozq-tindog.netlify.app/"

    },
    {
        portfolioId : "6", 
        title: "TBD",
        tagline: "tbd",
        keyPoints: "key skills listed here",
        description: `Summary of highlights`,
        image1: "img/portfolio6.jpg",
        image2: "img/portfolio6-wide.jpg",
        link: "#"

    }

]
const paramString = window.location.search.substring(1)
let vars = paramString.split("&")
let paramList = new Object()
vars.forEach((keyValue)=>{
    let pair = keyValue.split("=")
    paramList[`${pair[0].trim()}`] = `${pair[1].trim()}`
})
const portfolioItem = projectList.find(element => element.portfolioId === paramList.portfolioId)
const itemImg = document.getElementsByClassName("intro__img")[0]
itemImg.setAttribute("src",portfolioItem.image1)
document.getElementsByClassName("title")[0].innerHTML = `${portfolioItem.title}`
document.getElementsByClassName("subtitle")[0].innerHTML = `${portfolioItem.tagline}`
const keys = portfolioItem.keyPoints.split(",")
const summaryHTML = keys.map((item)=>{
    return `<li>${item}</li>`
}).join('')
document.getElementById("summary").innerHTML = summaryHTML
document.getElementById("keyPoints").innerHTML = `<b>Highlights:</b> ${portfolioItem.description}`
document.getElementById("projectLink").setAttribute("href",portfolioItem.link)
const element = document.getElementsByClassName("img__wide")[0]
if (portfolioItem.image2){
    element.style.display = "block"
    element.setAttribute("src",portfolioItem.image2)
} else {
    element.style.display = "none"
}
