const express = require('express');
const cors = require('cors');


const clientes = require('./Routes/clientes');
const telefone = require('./Routes/telefone');
const veiculos = require('./Routes/veiculos');
const professor = require('./Routes/professor');

const app = express();

app.use(cors());
app.use(express.json()); 


app.use('/clientes', clientes); 
app.use('/professor', professor);  
app.use('/telefone', telefone);    
app.use('/veiculos', veiculos); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});