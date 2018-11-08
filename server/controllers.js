const Movies = require('./models');
const Reviews = require('./models');


function readAll(req, res){
    Movies.find({}).sort({type: 'ascending'})
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
}

function readOne(req, res){
    Movies.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
}

function deleteOne(req, res){
    Movies.findByIdAndRemove(req.params.id)
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
}

function updateOne(req, res){
    Movies.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function createOne(req, res){
    Movies.create(req.body)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function createReview(req, res){
    Movies.findById(req.params.id)
        .then(movie=> {
            movie.review.push(req.body);
            return movie.save()
        })
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
}


module.exports = {
    readAll: readAll,
    readOne: readOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    createOne: createOne,
    createReview: createReview
}