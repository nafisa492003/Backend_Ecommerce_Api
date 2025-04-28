const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
   description:{
    type:String,
    required:true,
   }
});

//Export the model
module.exports = mongoose.model('category', categorySchema);