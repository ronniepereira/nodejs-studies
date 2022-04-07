const express = require('express')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Estudos de NodeJS"))
    app.use(
        express.json(),
        pessoas,
        niveis,
        turmas
    )
}

module.exports = routes