import autores from "../models/Autor.js"

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autor) => {
            res.status(200).json(autor)
        })
    }

    static obterAutorById = (req, res) => {
        const { id } = req.params

        autores.findById(id, (err, autor) => {
            if (err) {
                res.status(400).send({ message: "Autor não encontrado" })
            }
            else {
                res.status(200).send(autor)
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `[ERROR]: ${err}` })
            }
            else {
                res.status(201).send(autor)
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const { id } = req.params

        autor.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Autor atualizado com sucesso" })
            }
            else {
                res.status(500).send({ message: `Houve um erro inesperado: ${err.message}` })
            }
        })
    }

    static excluirAutor = (req, res) => {
        const { id } = req.params

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Autor removido com sucesso" })
            }
            else {
                res.status(500).send({ message: `Houve um erro: ${err.message}` })
            }
        })
    }
}

export default AutorController