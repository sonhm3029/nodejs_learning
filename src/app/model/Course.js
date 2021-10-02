const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String},
    description: { type: String, maxlength: 600},
    img: String,
    slug: { type: String, slug:'name', unique: true},
    videoId: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('course', Course);

