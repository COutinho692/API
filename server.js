const express = require('express');
const app = express();
app.use(express.json());

let games = [
    { id: 1, titulo: "The Legend of Zelda: Breath of the Wild", plataforma: "Switch", genero: "Aventura", anoLancamento: 2017 },
    { id: 2, titulo: "Elden Ring", plataforma: "PC/PS5/Xbox", genero: "RPG", anoLancamento: 2022 },
    { id: 3, titulo: "God of War Ragnarök", plataforma: "PS5", genero: "Ação", anoLancamento: 2022 },
    { id: 4, titulo: "Cyberpunk 2077", plataforma: "PC/Consoles", genero: "RPG", anoLancamento: 2020 },
    { id: 5, titulo: "Red Dead Redemption 2", plataforma: "PC/PS4/Xbox", genero: "Mundo Aberto", anoLancamento: 2018 },
    { id: 6, titulo: "Hollow Knight", plataforma: "PC/Switch", genero: "Metroidvania", anoLancamento: 2017 },
    { id: 7, titulo: "Minecraft", plataforma: "Multi", genero: "Sandbox", anoLancamento: 2011 },
    { id: 8, titulo: "The Last of Us Part II", plataforma: "PS4", genero: "Survival Horror", anoLancamento: 2020 },
    { id: 9, titulo: "Hadès", plataforma: "PC/Switch", genero: "Roguelike", anoLancamento: 2020 },
    { id: 10, titulo: "Starfield", plataforma: "PC/Xbox", genero: "RPG", anoLancamento: 2023 }
];

// --- Middleware de Tratamento de Erros ---
const handleNotFound = (res) => res.status(404).json({ erro: "Registro não encontrado." });

// --- CRUD ---

// GET: Listar todos
app.get('/games', (req, res) => {
    res.status(200).json(games);
});

// GET: Buscar por ID
app.get('/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) return handleNotFound(res);
    res.json(game);
});

// POST: Criar novo jogo
app.post('/games', (req, res) => {
    const { titulo, plataforma, genero, anoLancamento } = req.body;

    if (!titulo || !plataforma || !genero || !anoLancamento) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios: titulo, plataforma, genero, anoLancamento." });
    }

    const novoGame = {
        id: games.length > 0 ? games[games.length - 1].id + 1 : 1,
        titulo,
        plataforma,
        genero,
        anoLancamento: parseInt(anoLancamento)
    };

    games.push(novoGame);
    res.status(201).json(novoGame);
});

// PUT: Atualizar jogo
app.put('/games/:id', (req, res) => {
    const index = games.findIndex(g => g.id === parseInt(req.params.id));
    if (index === -1) return handleNotFound(res);

    const { titulo, plataforma, genero, anoLancamento } = req.body;
    
    if (!titulo || !plataforma || !genero || !anoLancamento) {
        return res.status(400).json({ erro: "Dados incompletos para atualização." });
    }

    games[index] = { ...games[index], titulo, plataforma, genero, anoLancamento };
    res.json(games[index]);
});

// DELETE: Remover jogo
app.delete('/games/:id', (req, res) => {
    const index = games.findIndex(g => g.id === parseInt(req.params.id));
    if (index === -1) return handleNotFound(res);

    games.splice(index, 1);
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));