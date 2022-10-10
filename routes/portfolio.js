const express = require("express")
const router = express.Router()
const {
    rootRoute,
    about,
    projects,
} = require("../controllers/portfolioController.js")


router.get("/", rootRoute)

// INDEX projects
router.get("/projects", projects)

// INDEX about
router.get("/about", about)

module.exports = router