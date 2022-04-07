const database = require('../models')

class NivelController {

    static async listNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getByIdNivel(req, res) {
        const { id } = req.params
        try {
            const nivel = await database.Niveis.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(nivel)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createNivel(req, res) {
        const novoNivel = req.body
        try {
            const novoNivelCriada = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriada)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateNivel(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Niveis.update(novasInfos, { where: { id: Number(id) } })
            const nivelAtualizado = database.Niveis.findOne({ where: { id: Number(id) } })

            return res.status(200).json(nivelAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteNivel(req, res) {
        const { id } = req.params
        try {
            await database.Niveis.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `ID: ${id} Deletado com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController