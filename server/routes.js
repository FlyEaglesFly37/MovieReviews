const api = require('./controllers');
const bp = require('body-parser');

function router(app){
    app.use(bp.json());
    app.get('/api/movie', api.readAll);
    app.get('/api/movie/:id', api.readOne);
    app.delete('/api/movie/:id', api.deleteOne);
    app.patch('/api/movie/:id', api.updateOne);
    app.post('/api/movie', api.createOne);
    app.patch('/api/movie/review/:id', api.createReview);
}

module.exports = router;