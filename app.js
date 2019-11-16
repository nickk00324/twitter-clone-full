const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected to mongodb successfully'))
.catch( err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/tweets', tweets);




const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})