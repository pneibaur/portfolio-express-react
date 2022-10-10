const projectsData = require("../data/projects.json")
const aboutData = require("../data/about.json")

const rootRoute = (req, res)=>{
    res.send("<h1>LANDING PAGE</h1>")
}

const about = (req, res)=>{
    res.json(aboutData)
}

const projects = (req, res)=>{
    res.json(projectsData)
}

module.exports = {
    rootRoute,
    about,
    projects
}