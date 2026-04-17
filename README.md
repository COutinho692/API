# 📚 API Biblioteca REST - Projeto Final

API para gerenciamento de acervo de livros desenvolvida em Node.js e SQLite.

## 🛠️ Tecnologias
- Node.js
- Express
- SQLite3 (Banco de Dados Local)

## ⚙️ Instalação
1. Clone o repositório
2. Execute `npm install`
3. Inicie com `npm run dev` (requer nodemon configurado)

## 📡 Endpoints Principais
- `GET /livros`: Lista livros. 
  - Query params: `page`, `limit`, `ordem` (titulo, ano, estoque), `dir` (ASC, DESC), `genero`.
- `POST /livros`: Cadastra um livro.
- `PUT /livros/:id`: Atualiza dados.
- `DELETE /livros/:id`: Remove registro.
