import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros)
            })
    }

    static obterLivroById = (req, res) => {
        const { id } = req.params

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livro) => {
                if (err) {
                    res.status(400).send({ message: "Livro não encontrado" })
                }
                else if (livro) {
                    res.status(200).send(livro)
                }
            })
    }

    static listarLivroPorEditora = (req, res) => {
        const { editora } = req.query

        livros.find({ 'editora': editora }, {}, (err, livros) => {
            if (err) {
                res.status(400).send({ message: "Livros não encontrado" })
            }
            else if (livro) {
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `[ERROR]: ${err}` })
            }
            else {
                res.status(201).send(livro)
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const { id } = req.params

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro atualizado com sucesso" })
            }
            else {
                res.status(500).send({ message: `Houve um erro inesperado: ${err.message}` })
            }
        })
    }

    static excluirLivro = (req, res) => {
        const { id } = req.params

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro removido com sucesso" })
            }
            else {
                res.status(500).send({ message: `Houve um erro: ${err.message}` })
            }
        })
    }

}

export default LivroController