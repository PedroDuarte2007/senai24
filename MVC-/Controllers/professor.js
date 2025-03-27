const professor = require('../Models/professor');

const createProfessor = (req, res) => {
    professor.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Professor criado com sucesso', result });
    });
};

const readProfessor = (req, res) => {
    professor.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateProfessor = (req, res) => {
    professor.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Professor atualizado com sucesso', result });
    });
};

const deleteProfessor = (req, res) => {
    professor.deleteProfessor(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Professor removido com sucesso', result });
    });
};

module.exports = { createProfessor, readProfessor, updateProfessor, deleteProfessor };