const { Psicologos } = require('../models');
const jwt = require('jsonwebtoken');
const secret = require("../config/secret")
const bcrypt = require('bcrypt');

const authController = {
     async login(req, res) {
     const { email, senha} = req.body; // Pegando dados do body

     const psychologist = await Psicologos.findOne({ // Encontrando o Psicologo cadastrado
        where: {
            email,
        }
     });
    
     if(!psychologist) {  // Se não existe email ou senha, retorna um erro.
        return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
     }

     if(!bcrypt.compareSync(senha, psychologist.senha)) { // Checa se a senha digitada é igual a senha cadastrada (Criptografada)
        return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
       }

       const token = jwt.sign({  // Criando token 
         id: psychologist.id,
         email: psychologist.email,
         nome: psychologist.nome
       }, secret.key)

       return res.json(token);
     }
}

module.exports = authController;