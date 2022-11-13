const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    //name : {
        firstName: {type: String},
        lastName: {type: String},
    //    },
    //role : {
        title :{type: String},
        duties:{type:String},
   // },
    dob : {type: Date},
    credentials: {type: String},
    notes: {type:String},
    //isUser: {type: Boolean, default: false},
    //isSuper: { type: Boolean, required: true, default: false},
    // record: recordSchema,
},
{
    timestamps : true,
})

module.exports = mongoose.model('Employee' , employeeSchema);