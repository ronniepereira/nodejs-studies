const database = require('../models')

class TurmaController {

    static async listTurmas(req, res) {
        try {
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getByIdTurma(req, res) {
        const { id } = req.params
        try {
            const turma = await database.Turmas.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(turma)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createTurma(req, res) {
        const novaTurma = req.body
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateTurma(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Turmas.update(novasInfos, { where: { id: Number(id) } })
            const turmaAtualizada = database.Turmas.findOne({ where: { id: Number(id) } })

            return res.status(200).json(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteTurma(req, res) {
        const { id } = req.params
        try {
            await database.Turmas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `ID: ${id} Deletado com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController