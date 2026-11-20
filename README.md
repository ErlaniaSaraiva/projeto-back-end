# API E-commerce - Produtos (Node.js, Express e Sequelize)

API RESTful modelarizada no padrão **MVC** para gestão de produtos de e-commerce, utilizando **Node.js**, **Express**, **Sequelize** e **SQLite**.

## Arquitetura do Projeto (MVC)

```text
projeto-back-end/
--src/
  --config/         #Configuração do banco de dados
  --controllers/    #Regras de negócio e tratamento de erros
  --migrations/     #Migrações do Sequelize (tabela produtos)
  --models/         #Modelos Sequelize e inicialização
  --routes/         #Definição das rotas RESTful
  --server.js       #Ponto de entrada da aplicação Express
--database.sqlite   #Banco de dados SQLite local
--package.json      
```

## Como Executar o Projeto

1. Instalar as dependências:
```bash
npm install
```

2. Executar as migrações do banco de dados (se necessário):
```bash
npx sequelize-cli db:migrate
```

3. Iniciar o servidor em modo de desenvolvimento:
```bash
npm run dev
```
*(Ou deretamente com `node src/server.js`)*

O servidor ficará disponível em `http://localhost:3000`.

## Endpoints da API (`/produtos`)

| Método |Rota | Descrição|
| :--- | :--- | :--- |
| `POST` | `/produtos` | Cria um novo produto |
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:id` | Busca um produto pelo `id` |
| `PUT` | `/produtos/:id` | Atualiza dados de um produto existente |
| `DELETE` | `/produtos/:id` | Remove um produto pelo `id` |

### Exemplos de Requisições 

* **Criar produto (`POST /produtos`)**
```json
{
    "nome": "Camiseta Básica",
    "descricao": "Algodão 100%",
    "preco": 59.90,
    "estoque": 15
}
```

* **Atualizar produto (`PUT /produtos/1`)**
```json
{
    "preco": 64.90,
    "estoque": 12
}
```
