const veiculos = require('../Models/veiculos');

const createVeiculos = (req, res) => {
    veiculos.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Veiculo criado com sucesso', result });
    });
};

const readVeiculos = (req, res) => {
    veiculos.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateVeiculos = (req, res) => {
    veiculos.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Veiculo atualizado com sucesso', result });
    });
};

const deleteVeiculos = (req, res) => {
    veiculos.deleteVeiculos(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Veiculo removido com sucesso', result });
    });
};

module.exports = { createVeiculos, readVeiculos, updateVeiculos, deleteVeiculos };