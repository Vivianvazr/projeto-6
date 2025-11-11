import express from "express"

const router = express.Router()
router.get("/:id", (req, res) => {
    console.log(req.params)

const produtos = [
  { "id": 1, "nome": "Mouse Gamer", "preco": 120 },
  { "id": 2, "nome": "Teclado Mecânico", "preco": 350 },
  { "id": 3, "nome": "Monitor Full HD", "preco": 900 }
];

res.json(produtos);
})

router.post("/", (req, res) => {
    console.log(req.params)
    res.json({ produtos: []})
})

export default router