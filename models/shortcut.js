const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortcutBody = new Schema({
    paths : {type: String ,required: true},
    operation : {type: String, required: true},

},
{
    timestamps : true
})

const shortcutSchema = new Schema({
    title : {type: String},
    tags: {type: String, required: false},
    keyCombo: {type: Array, required: true, max_length: 6},
    body: shortcutBody,

},
{
    timestamps : true
})

module.exports = mongoose.model('User', userSchema);