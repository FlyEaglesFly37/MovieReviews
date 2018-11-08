const express = require('express');
const app = express();
const router = require('./server/routes');
const path = require('path');

router(app);

app.use(express.static(path.join(__dirname, '/client/dist/client')));

app.all('*', (req, res)=>res.sendFile(path.join(__dirname, '/client/dist/client/index.html')));


app.listen(8000, function(req, res){
    console.log('Listening on 8000');
})