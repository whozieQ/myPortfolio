const projectList = [
    {
        portfolioId : "1",
        title: "Movie Watchlist",
        tagline: "most recent",
        keyPoints: "async funtions, making REST calls, leveraging local storage, icons, bubbling events",
        description: `My 10th solo project (2 months into training), the movie database API required 2 async (REST) function calls in order to retrieve a list of movies
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
        tagline: "Next-level JavaScript",
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
        tagline: "Next-level JavaScript",
        keyPoints: "event listeners, using timers, leveraging a data file, array methods, class constructors, arrow functions",
        description: `My 8th solo project, this mock "Tinder" for dogs followed a module heavy on arrays and array methods. It introduced using custom positioning attributes for placing the reaction stamps over 
        the dog pictures as well as forcing text to appear on top of the images. This was also my first use of clickable icons. Iterating through an array and displaying array contents
        is also a pretty new skill at this point.`,
        image1: "img/portfolio3.jpg",
        image2: "img/portfolio3-wide.jpg",
        link: "https://whozq-tindog.netlify.app/"

    },
    {
        portfolioId : "4", 
        title: "Hometown Homepage",
        tagline: "CSS & HTML basics",
        keyPoints: "color palettes, styling images, flexbox, classes, background images",
        description: `My 1st solo project concluded a module introducing all of the web dev basics in CSS and HTML. Entirely CSS focused, this project got us introduced to flexbox as we played with several
        sections each laid out differently. A secondary focus was on choosing color palettes and introducing gradients.`,
        image1: "img/portfolio4.jpg",
        link: "https://whozq-favoriteplaces.netlify.app"

    },
    {
        portfolioId : "5", 
        title: "Unit Converter",
        tagline: "Javascript Basics",
        keyPoints: "beginning javascript, template strings, calculations, accepting input, handling button clicks",
        description: `My 4th solo project leveraged techniques for beginning to make websites interactive. A very simple 
        unit converter introduces event listeners, accepting input and dynamically displaying new content 
        as a result of an event (button click). This project was all about what it *does* and not about how it looks.`,
        image1: "img/portfolio5.jpg",
        link: "https://whozieq.github.io/UnitConverter/"

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
