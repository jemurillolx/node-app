const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients.controllers');


router.get('/', clientsCtrl.getDefault );
router.get('/all/',clientsCtrl.getAllInfoClients );
router.get('/row/:llavefila', clientsCtrl.getBYRowID);
router.get('/tipo_doc/:tipo_doc', clientsCtrl.getBYtipo_doc);//por tipo documento en general
router.get('/categoria/:categoria', clientsCtrl.getBYcategoria);//por el hash

router.get('/documento/:documento', clientsCtrl.getBYhash);//por el hash


module.exports = router;