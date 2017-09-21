require('../secrets');
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const db = require('./db')

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, '../public'))); 

app.use('/api', require('./api'));

app.get('*', (req, res, next) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(errstatus || 500).send(err.message || 'Internal server error');
}); 

const port = process.env.PORT || 3000; // this can be very useful if you 
db.sync()
.then (() => {
  app.listen(3000, () => console.log('Listening on 3000'))
})
.catch( () => console.log('Error with database sync'));


module.exports = app;