const express = require("express");
const cors = require('cors');
const authMiddleware = require("./authMiddleware");
const alunoRoutes = require("./AvaliacaoPrimeiraFase/routes/alunoRoutes");
const disciplinaRoutes = require("./AvaliacaoPrimeiraFase/routes/disciplinaRoutes");
const perfilRoutes = require("./AvaliacaoPrimeiraFase/routes/perfilRoutes");
const professorRoutes = require("./AvaliacaoPrimeiraFase/routes/professorRoutes");
const tarefaRoutes = require("./AvaliacaoPrimeiraFase/routes/tarefaRoutes");
const turmaRoutes = require("./AvaliacaoPrimeiraFase/routes/turmaRoutes");

const app = express();

require("dotenv").config();

const db = require("./AvaliacaoPrimeiraFase/database/db"); 

app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use("/api", alunoRoutes);
app.use("/api", disciplinaRoutes);
app.use("/api", perfilRoutes);
app.use("/api", professorRoutes);
app.use("/api", tarefaRoutes);
app.use("/api", turmaRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}!`);
});