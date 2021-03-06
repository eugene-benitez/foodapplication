// dependencies
const express = require('express');
const bp = require('body-parser');
const session = require('express-session');
const app = express();
const port = 8888;
const bcrypt = require('bcryptjs');


// settings
app
    .use(bp.json())
    .use(express.static(__dirname + '/public/dist/public'))
    .listen(8888, '0.0.0.0', () => console.log(`listening on port ${port}`));

require('./backend/routes')(app);


app.set('trust proxy', 1) // trust first proxy


