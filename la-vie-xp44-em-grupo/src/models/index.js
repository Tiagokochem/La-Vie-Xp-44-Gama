const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");


Pacientes.belongsTo(Atendimentos, {
  foreignKey: "id_paciente",
});

Atendimentos.hasMany(Pacientes, {
  foreignKey: "id_paciente",
});

Psicologos.belongsTo(Atendimentos, {
  foreignKey: "id_psicologo",
});

Atendimentos.hasMany(Psicologos, {
  foreignKey: "id_psicologo",
});
Psicologos.hasMany(Atendimentos,{
  foreignKey:"id_psicologo",
});



module.exports = {
  Atendimentos,
  Pacientes,
  Psicologos,
}