require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {} = require('./controller');

const app = express();

let {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
})