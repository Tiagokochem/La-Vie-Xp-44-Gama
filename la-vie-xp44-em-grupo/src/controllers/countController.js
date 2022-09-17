
const {Atendimentos, Psicologos, Pacientes} = require ("../models/");
const countController = {
    countAll : async (req,res) =>{
        const countPsicologos = await Psicologos.count();
        const countAtendimentos = await Atendimentos.count();
        const countPacientes = await Pacientes.count();
        resposta = {"Numero de psicologos:" :countPsicologos, "Numero de pacientes: " :countPacientes, "Numero de atendimentos: " :countAtendimentos};
        respJson = JSON.stringify(resposta);
        res.send(respJson);
    },
    countPsicologo : async (req,res) =>{
        //const {id} = req.params;
        const countPsicologos = await Psicologos.count();
        resposta = {"Numero de psicologos:" :countPsicologos};
        respJson = JSON.stringify(resposta);
        res.send(respJson)
       
    },
    countPaciente : async (req,res) =>{
        const countPacientes = await Pacientes.count();
        resposta = {"Numero de Pacientes:" :countPacientes};
        respJson = JSON.stringify(resposta);
        res.send(respJson);
    },
    countAtendimento : async (req,res) =>{
        const countAtendimentos = await Atendimentos.count();
        resposta = {"Numero de Atendimentos:" :countAtendimentos};
        respJson = JSON.stringify(resposta);
        res.send(respJson);
    }
}

module.exports = countController;