const Produto = require('../models/Produtos');

//Auxiliar para lidar com erros de validação do Sequelize ou erros inesperados
function tratarErro(res, error) {
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
        const mensagens = error.errors.map((err) => err.massage);
        return res.status(400).json({
            error: 'Dados inválidos',
            detalhes: mensagens
        });
    }
    console.error('Erro interno:', error);
    return res.status(500).json({
        erro: 'Erro interno do servidor'
    });
}

//POST /produtos -> Criar um novo produto
async function criarProduto(req, res) {
    try {
        const { nome, descricao, preco, estoque } = req.body;

        const novoProduto = await Produto.create({
            nome,
            descricao,
            preco,
            estoque
        });
        return res.status(201).json({
            mensagem: 'Produto criado com sucesso',
            produto: novoProduto
        });
    } catch (error) {
        return tratarErro(res, error);
    }
}

//GET /produtos -> Listar todos os produtos
async function listarProdutos(req, res) {
    try {
        const produtos = await Produto.findAll();
        return res.status(200).json(produtos);
    } catch (error) {
        return tratarErro(res, error);
    }
}

//GET /produtos/:id -> Buscar um produto específico pelo ID 
async function buscarProdutoPorId(req, res) {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({
                error: 'Produto não encontrado'
            });
        }

        return res.status(200).json(produto);
    } catch (error) {
        return tratarError(res, error);
    }
}

//PUT /produtos/:id -> Atualizar um produto existente pelo ID
async function atualizarProduto(req, res) {
    try {
        const { id } = req.params;
        const { nome, descricao, preco, estoque } = req.body;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({
                erro: 'Produto não encontrado'
            });
        }

        await produto.update({
            nome: nome !== undefined ? nome : produto.nome,
            descricao: descricao !== undefined ? descricao : produto.descricao,
            preco: preco !== undefined ? preco : produto.preco,
            estoque: estoque !== undefined ? estoque : produto.estoque
        });

        return res.status(200).json({
            mensagem: 'Produto atualizado com secesso',
            produto
        });
    } catch (error) {
        return tratarErro(res, error);
    }
}

//DELETE /produto/:id -> Remover um produto pelo ID
async function removerProduto(req, res) {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({
            erro: 'Produto não encontrado'
        });
        }
        await produto.destroy();

        return res.status(200).json({
            mensagem: 'Produto removido com sucesso'
        });
    } catch (error) {
        return tratarErro(res, error);
    }
}

module.exports = {
    criarProduto,
    listarProdutos,
    buscarProdutoPorId,
    atualizarProduto,
    removerProduto
};