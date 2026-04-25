# 🛒 API de Produtos

API REST desenvolvida com **Node.js**, **Express** e **MongoDB** para gerenciamento de produtos, permitindo operações completas de **CRUD** (Create, Read, Update, Delete).

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* Postman (testes de requisições)

---

## 🧠 Arquitetura

O projeto segue o padrão de **arquitetura em camadas**, separando responsabilidades:

```bash
src/
 ├── controllers/   # Regras de entrada e resposta (HTTP)
 ├── services/      # Regras de negócio
 ├── models/        # Estrutura dos dados (MongoDB)
 ├── routes/        # Definição das rotas
 ├── database.js    # Conexão com o banco
 └── server.js      # Inicialização do servidor
```

---

## 📌 Funcionalidades

* Criar produto
* Listar produtos
* Buscar produto por ID
* Atualizar produto
* Deletar produto

---

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/AlonsoFavero/backend-produtos
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Rodar o servidor

```bash
node src/server.js
```

---

### 4. Configurar o banco de dados

Certifique-se de que o MongoDB está rodando localmente ou configure a string de conexão no arquivo:

```bash
src/database.js
```

---

## 🔗 Endpoints da API

### ➕ Criar produto

```http
POST /produtos
```

Body:

```json
{
  "nome": "Mouse",
  "preco": 50
}
```

---

### 📄 Listar produtos

```http
GET /produtos
```

---

### 🔍 Buscar produto por ID

```http
GET /produtos/:id
```

---

### ✏️ Atualizar produto

```http
PUT /produtos/:id
```

Body:

```json
{
  "nome": "Mouse Gamer",
  "preco": 120
}
```

---

### ❌ Deletar produto

```http
DELETE /produtos/:id
```

---

## 📥 Exemplo de resposta

```json
{
  "_id": "65f1c2a9b3f1a2d4c8e9a123",
  "nome": "Mouse Gamer",
  "preco": 120,
  "__v": 0
}
```

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos importantes como:

* Construção de APIs REST
* Integração com banco de dados MongoDB
* Uso de Mongoose para modelagem de dados
* Organização de código em camadas (Controller, Service, Model)
* Validação de dados
* Testes de endpoints com Postman

---

## 📌 Status do projeto

🚧 Em evolução — melhorias e novas funcionalidades serão adicionadas.

---

## 👨‍💻 Autor

Desenvolvido por **[Alonso Favero Filho]**

---

## 📎 Observações

Este projeto foi desenvolvido com foco em aprendizado prático de backend, simulando um ambiente real de desenvolvimento.
