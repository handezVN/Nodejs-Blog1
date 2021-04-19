const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
var handlebars = require('express-handlebars');
const port = 3000;
const methodOverride = require('method-override')
const db = require('./config/db');
const route = require('./routes');
const session = require('express-session');

// Connect to DB
db.connect();

// 
app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'somesecret', 
    cookie: { maxAge: 60000 }}));


app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
// HTTP logger
app.use(morgan('combined'));

// Template enigne

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum : (a,b) => a+b ,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

