const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const groceries = require('./routes/groceries');

const app = express();

app.use(express.static('css'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery-list');

app.use('/', groceries);
//Uses the routes from groceries.js

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
