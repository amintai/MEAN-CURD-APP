const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    FirstName : { type : String},
    LastName : { type : String},
    Email : { type : String},
    Dob : { type : String},
    Bio : {type : String}
});

module.exports = {Employee};