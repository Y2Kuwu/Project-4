const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    firstName: {type: String},
    lastName: {type: String},
    title :{type: String},
    dob : {type: Date},
    
    duties:{type:Array},
    credentials: {type: Array},
    notes: {type:Array, required:false},
    //isUser: {type: Boolean, default: false},
    //isSuper: { type: Boolean, required: true, default: false},
    // record: recordSchema,
},
{
    timestamps : true,
})

module.exports = mongoose.model('Employee' , employeeSchema);