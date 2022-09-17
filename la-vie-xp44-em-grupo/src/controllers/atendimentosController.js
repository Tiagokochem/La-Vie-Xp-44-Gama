const {Atendimentos, Psicologos, Pacientes} = require ("../models/");
const AtendimentosController = {
    listAll : async (req,res) =>{
        const atendimentos = await Atendimentos.findAll({
            include: [ { model: Psicologos, as: 'Psicologos' },  { model: Pacientes, as: 'Pacientes' } ],
        });
        return res.json(atendimentos);
    },
    createAtendimento : async (req, res) => {
        const {id_atendimento, data_atendimento, observacao, id_psicologo, id_paciente} = req.body;

        const newAtendimento = await Atendimentos.create({
            id_atendimento, data_atendimento, observacao, id_psicologo, id_paciente,
        });
        return res.status(201).json(newAtendimento);
        
    },

    getAtendimento : async (req,res)=>{
        try{
            const {id} = req.params;
            const atendimentoID = await Atendimentos.findByPk(id);
            if (atendimentoID != null){
                return res.status(200).json(atendimentoID)
                
            }else {
                res.status(404).json("Atendimento "+ id+ " não encontrado.")
            }
            }catch (e) {
                throw e;
        }
    },
    delAtendimento: async(req,res) =>{
        try{
        const {id} = req.params;
        const atendimentoID = await Atendimentos.findByPk(id);
        if(atendimentoID != null){
            atendimentoID.destroy();
            res.status(204).json(atendimentoID);
        }else{
            res.status(404).json("Atendimento "+ id+ " não encontrado.")
        }
        }catch(error){

        }
    },
    attAtendimento: async (req,res) => {
        const {id} = req.params;
        const {id_atendimento, data_atendimento, observacao, id_psicologo, id_paciente} = req.body;
        
        atendimentoAtt = await Atendimentos.update(
            {
                id_atendimento,
                data_atendimento,
                observacao,
                id_psicologo,
                id_paciente
            },
            {
                where: {
                    id_atendimento: id
                },
            }
        );
        res.status(200).json("Atendimento atualizado com sucesso.")
    }
    
};

module.exports = AtendimentosController;