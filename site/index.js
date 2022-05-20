const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const rotas = require('./src/routes/medidas');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

let db = [
    {'1': { Nome: 'Cliente 1', Idade: 20}}
]

app.get('/', (req, res) => {
     return res.json(db);
})

app.listen(3333, () => {
    console.log("Seu lindio http://localhost:3333")
});