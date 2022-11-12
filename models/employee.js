const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    
    name : {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        },
    role : {
        title :{type: String},
        duties:{type:Array},
    },
    dob : {type: Date},
    credentials: {type:Array},
    notes: {type:String, required: false},
    isUser: {type: Boolean, default: false},
    isSuper: { type: Boolean, required: true, default: false},
    // record: recordSchema,
},
{
    timestamps : true,
})

module.exports = mongoose.model('Employee' , employeeSchema);