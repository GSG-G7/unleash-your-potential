const { join } = require('path');
const express = require('express');
const exphs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const router = require('./controllers/index');

const PORT = process.env.PORT || 3030;
const app = express();

app.use(cookieParser());
app.set('port', PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'public')));
app.set('views', join(__dirname, 'views'));

app.set('view engine', 'hbs');
app.use(router);
app.engine(
  'hbs',
  exphs({
    extname: 'hbs',
    layoutsDir: join(__dirname, 'views', 'layouts'),
    partialsDir: join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',

  }),
);

module.exports = app;
