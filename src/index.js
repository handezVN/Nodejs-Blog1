const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
var handlebars  = require('express-handlebars');
const port = 3000;

const route = require('./routes');

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));


// HTTP logger
app.use(morgan('combined'));

// Template enigne

app.engine('hbs', handlebars({
  extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'))
route(app);
// app.get('/', (req, res) => {
   
//   res.render('home');
// })

// app.get('/news', (req, res) => {
   
//   res.render('news');
// })

// app.get('/search', (req, res) => {
   
//   res.render('search');
// })

// app.post('/search', (req, res) => {
//   console.log(req.body);
//   res.send('');
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})