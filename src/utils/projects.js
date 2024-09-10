import lymb from "/lymb.png"
import gamerParadise from "/gamedice.png"
import quotaku from "/quotaku.png"
import weatherDashboard from "/weatherDashboard3.png"
import readme from "/readme.jpg"
import stateCapitalQuiz from "/stateCapitalQuiz.png"

const projects = [
    {
        "name": "Lymb",
        "description": "A Fitness App. Explore our exercises, create your workout, and curate your workout. Start your exercise with our interval-timer",
        "photoLink": lymb,
        "githubRepo": "https://github.com/s0m3y3/lymb",
        "liveLink": "https://lymb-aa71bb2e24b0.herokuapp.com/"
    },
    {
        "name": "Gamer's Paradise",
        "description": "A Gamer's Blog. Post and comment about your favorite game, and create a user account!",
        "photoLink": gamerParadise,
        "githubRepo": "https://github.com/jaxongrosam/gamers-paradise",
        "liveLink": "https://gamers-paradise-05f5c02b304d.herokuapp.com/"
    },
    {
        "name": "Quotaku App",
        "description": "Love anime? Find your favorite character's famous quotes!",
        "photoLink": quotaku,
        "githubRepo": "https://github.com/s0m3y3/Quotaku",
        "liveLink": "https://s0m3y3.github.io/Quotaku/"
    },
    {
        "name": "Weather Dashboard",
        "description": "A simple weather forcast App. Enter a city name, and it will search today's and 5-day forcast for the weather. Great for travels, or event planning.",
        "photoLink": weatherDashboard,
        "githubRepo": "https://github.com/s0m3y3/WeatherDashboard",
        "liveLink": "https://s0m3y3.github.io/WeatherDashboard/"
    },
    {
        "name": "U.S. State Capital Quiz",
        "description": "Refresh on your U.S. State Capital, with this quick and simple multiple-choice quiz! A basic static website.",
        "photoLink": stateCapitalQuiz,
        "githubRepo": "https://github.com/s0m3y3/U.S.-State-Capital-Quiz",
        "liveLink": "https://s0m3y3.github.io/U.S.-State-Capital-Quiz/"
    },
    {
        "name": "README Generator",
        "description": "Working on a new github project and want a faster way to generate a README.md file? This app is for you!",
        "photoLink": readme,
        "githubRepo": "https://github.com/s0m3y3/readme_generator",
        "liveLink": "n/a"
    }
]


export default function projectData() {
return projects;
}
