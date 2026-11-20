const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     produto:
 *       type: object
 *       required:
 *         - nome
 *         - preco
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *         nome:
 *           type: string
 *           description: Nome do produto
 *         descricao:
 *           type: string
 *           description: Descrição detalhada do produto
 *         preco:
 *           type: number
 *           description: Preço unitário
 *         estoque:
 *           type: integer
 *           description: Quantidade disponível em estoque     
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 * responses:
 *   200:
 *     description: Lista de produtos retornada com sucesso
 */
  
 
 /**
  * @swagger
  * /produtos:
  *   post:
 *   summary: Cria um novo produto
 *   tags: [Produtos]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Produto'
 * responses:
 *   201:
 *     description: Produto criado com sucesso
 *   400:
 *     description: Dados inválidos
 */

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do produto
 *       404:
 *         description: Produto não encontrado
 * put:
 *   summary: Atualiza um produto pelo ID
 *   tags: [Produtos]
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Produto'
 *   responses:
 *     200:
 *       description: Produto atualizado com sucesso
 *     404: 
 *       description: Produto não encontrado
 * delete:
 *   summary: Remove um produto pelo ID
 *   tags: [Produtos]
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *   responses:
 *     200:
 *       description: Produto removido com sucesso
 *     404:
 *       description: Produto não encontrado
 */

//Rotas CRUD para /produtos
router.post('/produtos', produtoController.criarProduto);
router.get('/produtos', produtoController.listarProdutos);
router.get('/produtos/:id', produtoController.buscarProdutoPorId);
router.put('/produtos/:id', produtoController.atualizarProduto);
router.delete('/produtos/:id', produtoController.removerProduto);

module.exports = router