const {validate, Joi} = require ("express-validation");

module.exports = validate ({
    body: Joi.object({
        data_atendimento: Joi.string().required(),
        observacao: Joi.string().required(),
        id_psicologo: Joi.number().integer(),
        id_paciente: Joi.number().integer(),
    })
});