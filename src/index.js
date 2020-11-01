const express = require('express');
const morgan = require('morgan');
//const methodOverride = require('method-override');
const {mongoose } = require('../database');

const bodyParser = require("body-parser");
const cors = require("cors");

//inicializaciones
const app = express();
  

//configuraciones

//el puerto disponible o el de default 3000
app.set('port', process.env.PORT || 4000);

//funciones 
app.use(morgan('dev'));
//para comenzar a manejar formatos json
app.use(express.json());
//app.use(methodOverride());


//variables globales

//routes
app.use('/bamapi/v1/clients',require('./routes/clients.routes'));

//app.use('/bamapi/v1/clients/metadata',require('./routes/metadata.routes'));

//static files

//Server starting

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});