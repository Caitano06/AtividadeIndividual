let mongoose = require("mongoose");

let alunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true, min: 18, max: 65 },
  perfil: { type: mongoose.Schema.Types.ObjectId, ref: "Perfil" },
});

module.exports = mongoose.model("Aluno", alunoSchema);

//Aluno - Perfil -> 1:1
//Tarefa - Disciplina -> n:n
//Tarefa - Disciplina -> n:n
//Professor - Disciplina -> 1:n
//Turma - Aluno -> 1:n
//Turma - Professor -> n:1