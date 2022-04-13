const res = require('express/lib/response')
const database = require('../models')

class PessoaController {
    static async listPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdPessoa(req, res) {
        const { id } = req.params
        try {
            const pessoa = await database.Pessoas.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(pessoa)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updatePessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            const pessoaAtualizada = database.Pessoas.findOne({ where: { id: Number(id) } })

            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletePessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `ID: ${id} Deletado com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restorePessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.restore({ where: { id: Number(id) } })
            return res.status(200).json({ message: `ID: ${id} Restaurado com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            return res.status(200).json(matricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }

        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body

        try {
            await database.Matriculas.update(novasInfos, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            const matriculaAtualizada = database.Matriculas.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })

            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            return res.status(200).json({ message: `ID: ${matriculaId} Deletado com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController