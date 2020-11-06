const express = require('express');


const app = express();

app.use(express.json());

require('./app/database');

const routes = require('./routes');

app.use(routes);

app.listen(process.env.port || 3000);

/**
 * 

router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/sobre', function(req,res) {
    res.sendFile(path.join(__dirname+'/sobre.html'));
})

app.use('/', router);

 */