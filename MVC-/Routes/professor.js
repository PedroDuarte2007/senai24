const express = require('express');
const router = express.Router();
const professor = require('../Controllers/professor');

router.post('/', professor.createProfessor);     
router.get('/', professor.readProfessor);       
router.put('/:id', professor.updateProfessor);    
router.delete('/:id', professor.deleteProfessor); 

module.exports = router;