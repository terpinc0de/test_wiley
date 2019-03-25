const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, '/dist/wiley')));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/wiley/index.html');
});
app.listen(port);
