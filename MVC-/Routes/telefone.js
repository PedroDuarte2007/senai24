const express = require('express');
const router = express.Router();
const telefone = require('../Controllers/telefone');

router.post('/', telefone.createTelefone);     
router.get('/', telefone.readTelefone);       
router.put('/:id', telefone.updateTelefone);    
router.delete('/:id', telefone.deleteTelefone); 

module.exports = router;