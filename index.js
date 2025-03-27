const express = require("express");
const cors = require('cors');
const authMiddleware = require("./authMiddleware");
const alunoRoutes = require("./routes/alunoRoutes");
const disciplinaRoutes = require("./routes/disciplinaRoutes");
const perfilRoutes = require("./routes/perfilRoutes");
const professorRoutes = require("./routes/professorRoutes");
const tarefaRoutes = require("./routes/tarefaRoutes");
const turmaRoutes = require("./routes/turmaRoutes");

const app = express();

require("dotenv").config();

const db = require("./database/db");

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