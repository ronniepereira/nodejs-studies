import express from "express"
import LivroController from "../controllers/livrosController.js"

const router = express.Router()

router.get("/livros", LivroController.listarLivros)
router.get("/livros/buscar", LivroController.listarLivroPorEditora)
router.get("/livros/:id", LivroController.obterLivroById)
router.post("/livros", LivroController.cadastrarLivro)
router.put("/livros/:id", LivroController.atualizarLivro)
router.delete("/livros/:id", LivroController.excluirLivro)

export default router