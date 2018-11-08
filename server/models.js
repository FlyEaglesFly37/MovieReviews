const mongoose = require('mongoose');

// const MovieSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         minlength: [3, 'Movie title must be 3 characters long']
//     },
//     review: [
//         {
//             name: {
//                 type: String,
//                 minlength: [3, 'Name must be longer than 3 characters']
//             },
//             rating: {
//                 type: Number,
//                 required: true
//             },
//             content: {
//                 type: String,
//                 minlength: [3, 'Review must be longer than 3 characters']
//             }
//         }
//     ]
// }, {timestamps: true});

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'Your name must be longer than 3 characters']
    },
    rating: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        minlength: [3, 'Your review must be longer than 3 characters']
    }
});

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [3, 'Movie title must be at least 3 characters long']
    },
    review: [ReviewSchema]
}, {timestamps: true});

mongoose.connect('mongodb://localhost:27017/movie', {useNewUrlParser: true}, (errs)=>console.log(errs));

const Movies = mongoose.model('movie', MovieSchema);
const Reviews = mongoose.model('review', ReviewSchema);

module.exports = Movies, Reviews;