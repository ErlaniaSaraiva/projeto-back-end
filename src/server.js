const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
const PORT = 3000;

//Middleware para interpretar JSON no corpo dos pedidos (ex.: POST e PUT)
app.use(express.json());

//Rota inicial de teste (endpoints GET)
app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'API Back-end a funcionar com sucesso!'
    });
});

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API E-commerce - Produtos',
            version: '1.0.0',
            description: 'Documentação da API RESTful de gestão de produtos',
        },
        servers: [
            {
                url: 'http://localhost:300',
            },
        ],
    },
    apis:['./src/routes/*.js'], //Lê os comentários de documentação nas rotas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


//Registra as rotas do CRUD de produtos
app.use('/', produtoRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});
