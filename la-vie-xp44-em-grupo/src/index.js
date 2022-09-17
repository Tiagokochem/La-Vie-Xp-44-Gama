const express = require ('express');
const {hasConnection} = require ("./database")
const routes = require('./routes');
const handleError = require ("./middlewares/handleError");
const app = express ();

hasConnection();
app.use(express.json());
app.use(routes);
app.use(handleError);
app.listen (3300, () => console.log("Servidor rodando na porta 3300."));
