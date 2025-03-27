const telefone = require('../Models/telefone');

const createTelefone = (req, res) => {
    telefone.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Telefone criado com sucesso', result });
    });
};

const readTelefone = (req, res) => {
    telefone.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateTelefone = (req, res) => {
    telefone.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Telefone atualizado com sucesso', result });
    });
};

const deleteTelefone = (req, res) => {
    telefone.deleteTelefone(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Telefone removido com sucesso', result });
    });
};

module.exports = { createTelefone, readTelefone, updateTelefone, deleteTelefone };