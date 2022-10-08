const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empID : {
        type: String, 
        max_length: 50,
        reuired: true},
    name : {
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        },
    role : {type: String},
    timeServed: {type: Date},
    age : {type: Date},
    salary: {type: Number},
    credentials: {type:Array},
    duties: {type:Array},
    record: { type: Schema.Types.ObjectId, ref: 'Record' },
    isSuper: { type: Boolean, required: true, default: false},

    //approval : { app :{type:Number}, dis : {type:Number}, over: {type:Number}
    //trackRecord
},
{
    timestamps : true
})

module.exports = mongoose.model(employeeSchema)