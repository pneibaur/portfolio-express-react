// ---------------------------------
// DEPENDENCIES
// ---------------------------------
require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const projects = require("./projects.json")
const about = require("./about.json")

// ---------------------------------
// MONGOOSE CONNECTION
// ---------------------------------
// ---------------------------------
// MIDDLEWARE
// ---------------------------------
app.use(cors())
// ---------------------------------
// ROUTES
// ---------------------------------
app.get("/", (req, res) => {
    res.send("<h1>HELLO THERE!</h1>")
})

// INDEX projects
app.get("/projects", (req, res)=>{
    res.json(projects)
})
// INDEX about
app.get("/about", (req, res) =>{
    res.json(about)
})
// ---------------------------------
// LISTENER
// ---------------------------------
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))