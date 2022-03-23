const express = require ('express')
const bodyParser = require('body-parser');

const app = express();

bodyParser.urlencoded({ extended: true })


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
}) 


app.listen('3000', () => {
    console.log('server is running on port 3000');
}) 