const clientes = require('../Models/cliente');

const createCliente = (req, res) => {
    clientes.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Cliente criado com sucesso', result });
    });
};

const readCliente = (req, res) => {
    clientes.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateCliente = (req, res) => {
    clientes.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Cliente atualizado com sucesso', result });
    });
};

const deleteCliente = (req, res) => {
    clientes.deleteCliente(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Cliente removido com sucesso', result });
    });
};

module.exports = { createCliente, readCliente, updateCliente, deleteCliente };