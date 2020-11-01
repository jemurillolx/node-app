
const express = require('express');
const app = express();
var Clients = require('../models/clients');
const clientsCtrl = {};

//varias funciones 
clientsCtrl.getDefault = (req, res) => {
    res.json({
        status: 'BAM API Clients works'
    });
   };


clientsCtrl.getAllInfoClients = async (req, res) => {
    const clientes = await Clients.find();
    res.json(clientes);
   };

clientsCtrl.getBYRowID = async (req, res) => {
    const cliente = await Clients.findById(req.params.llavefila);
    res.json(cliente);
};

clientsCtrl.getBYtipo_doc = async (req, res) => {
    const clientes = await Clients.find({ tipo_doc: req.params.tipo_doc });
    res.json(clientes);
};

clientsCtrl.getBYcategoria = async (req, res) => {
    const clientes = await Clients.find({categoria : req.params.categoria});
    res.json(clientes);
};


clientsCtrl.getBYhash = async (req, res) => {
    const clientes = await Clients.find({documento : req.params.documento});
    res.json(clientes);
};



module.exports = clientsCtrl;
