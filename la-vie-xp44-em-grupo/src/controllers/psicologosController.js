const e = require("express");
const { Atendimentos , Psicologos} = require("../models");
const bcrypt = require ('bcryptjs')
const PsicologosController = {
    listAll : async (req,res) =>{
        const psicologos = await Psicologos.findAll({
            include: [ { model: Atendimentos, as: 'Atendimentos' }],
        });
        return res.status(200).json(psicologos);
    },
    createPsicologos : async (req, res) => {
        const {id_psicologo, nome, email, senha, apresentacao} = req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        const newPsicologo = await Psicologos.create({
            id_psicologo, 
            nome,
            email, 
            senha:newSenha, 
            apresentacao,
        });
        return res.status(201).json(newPsicologo);
    },

    getPsicologo : async (req,res)=>{
        try{
            const {id} = req.params;
            const psicologoID = await Psicologos.findByPk(id)//,{include: [ { model: Atendimentos.count(), as: 'Atendimentos' }],});
            if (psicologoID != null){
                return res.status(200).json(psicologoID)
                
            }else {
                res.status(404).json("Psicólogo "+ id+ " não encontrado.")
            }
            }catch (e) {
                throw e;
            }
    },
    delPsicologo: async(req,res) =>{
        try {
        const {id} = req.params;
        const psicologoID = await Psicologos.findByPk(id);
        if (psicologoID != null){
        psicologoID.destroy();
        res.status(204).json(psicologoID);
        }else {
            res.status(404).json("Psicólogo "+ id+ " não encontrado.")
        }
        }catch(error) {
            throw error;
        }
        
    },
    attPsicologo: async (req,res) => {
        const {id} = req.params;
        const {id_psicologo, nome, email, senha, apresentacao} = req.body;
        
        psicologoAtt = await Psicologos.update(
            {
                id_psicologo, 
                nome,
                email, 
                senha, 
                apresentacao
            },
            {
                where: {
                    id_psicologo: id
                },
            }
        );
        res.status(200).json("Psicologo atualizado com sucesso.")
    }
};

module.exports = PsicologosController;