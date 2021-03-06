const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const questionRouter = require('./routes/question');
const categoryRouter = require('./routes/category');
const showRouter = require('./routes/show');

const app = express();

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', indexRouter);
app.use('/question', questionRouter);
app.use('/category', categoryRouter);
app.use('/show', showRouter);

module.exports = app;

// {"category": "HISTORY", "air_date": "2004-12-31", "question": "'For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory'", "value": "$200", "answer": "Copernicus", "round": "Jeopardy!", "show_number": "4680"}