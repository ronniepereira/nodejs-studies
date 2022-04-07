const express = require("express")
const routes = require("./api/routes")

const app = express()
app.use(express.json())

routes(app)

const port = 3000

app.listen(port, () => console.log(`Server active on port: ${port}`))

module.exports = app