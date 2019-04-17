const mongoose = require ('mongoose');

const itemSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    number: { type: String,required: true },
    owner: { type: String,required: true },
})


module.exports = mongoose.model('CarNumber', itemSchema);






  