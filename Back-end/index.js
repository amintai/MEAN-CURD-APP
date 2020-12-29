const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db');
const employeeController = require('./controllers/employeeController.js');

const app = express();

// Load MiddleWare
app.use(bodyParser.json());
//http://localhost:4200/create
app.use(cors({ origin : 'http://localhost:4200' }));

app.listen(3000 , () => {
    console.log('Server started at port 3000');
});

app.use('/employees' , employeeController);