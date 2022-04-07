const express = require('express')
const pessoas = require('./pessoasRoute')
const router = express.Router();

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Estudos de NodeJS"))
    app.use(
        express.json(),
        pessoas
    )
}

module.exports = routes