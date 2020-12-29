const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Clementius' ,{ useCreateIndex: true,
useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
    if(!err) {
        console.log('Mongoose Connection Succeeded');
    } else {
        console.log(`Error in DB Connection ${JSON.stringify(err , undefined ,2)}`);
    }
});

mongoose.exports = mongoose;