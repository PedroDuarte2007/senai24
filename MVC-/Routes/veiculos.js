const express = require('express');
const router = express.Router();
const veiculos = require('../Controllers/veiculos');

router.post('/', veiculos.createVeiculos);     
router.get('/', veiculos.readVeiculos);       
router.put('/:id', veiculos.updateVeiculos);    
router.delete('/:id', veiculos.deleteVeiculos); 

module.exports = router;