const express = require('express');

const server = express();

server.get('/',(req, res) => {
    return res.send('lucas lindo');   
});

server.listen(3333);

