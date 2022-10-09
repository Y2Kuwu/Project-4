const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empID : {
        type: String, 
        max_length: 50,
        required: true,
        unique: true},
    name : {
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        },
    // face : {type: Image, required: false},
    role : {
        title :{type: String},
        duties: {type:Array},
    },
    age : {type: Date},
    salary: {type: Number},
    credentials: {type:Array},
    
    record: { type: Schema.Types.ObjectId, ref: 'Record' },
    isSuper: { type: Boolean, required: true, default: false}

    //approval : { app :{type:Number}, dis : {type:Number}, over: {type:Number}
    //trackRecord
},
{
    timestamps : true
})

module.exports = mongoose.model('Employee' ,employeeSchema)