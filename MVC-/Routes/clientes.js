const express = require('express');
const router = express.Router();
const clientes = require('../Controllers/clientes');

router.post('/', clientes.createCliente);     
router.get('/', clientes.readCliente);       
router.put('/:id', clientes.updateCliente);    
router.delete('/:id', clientes.deleteCliente); 

module.exports = router;