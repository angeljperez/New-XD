const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const methodOverride = require('method-override');


const app = express();


app.use(cors({
    credentials: true,
}));
app.use(morgan('tiny'));
app.use(helmet());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./routes/index'));

app.listen('3001',console.log('uri: http://localhost:3001/'));