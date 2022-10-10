// ---------------------------------
// DEPENDENCIES
// ---------------------------------
require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")

// ---------------------------------
// MIDDLEWARE
// ---------------------------------
app.use(cors())
app.use(morgan("dev"))

// ---------------------------------
// ROUTES
// ---------------------------------
const portfolioRouter = require("./routes/portfolio.js")
app.use("/", portfolioRouter)


// ---------------------------------
// LISTENER
// ---------------------------------
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))