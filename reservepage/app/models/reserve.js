var mongoose = require('mongoose');

module.exports = mongoose.model('Reserve', {
    firstname: String,
    lastname: String,
    phone: String,
    date: Date,
    party: String,
    time: String
});