const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// require('./company');
// const companySchema  = require('./company');
// const employeeSchema = require('./company');

const SALT_ROUNDS = 6;


const userSchema = new Schema({
    // company: companySchema,
    // employee: employeeSchema,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    },
    
    // company: [{type:Schema.Types.ObjecId,ref: 'Company'}],
    // employee: [{type:Schema.Types.ObjecId,ref: 'Employee'}],
    
   
    // authority: { type: Schema.Types.ObjectId, ref: 'Employee' }, // added to see if user is CEO or employee
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre("save", function (next) {
    console.log("calling before create method");
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function (error, hash) {
        if (error) return next(error);
        user.password = hash;
        return next();
    })
});

module.exports = mongoose.model('User', userSchema);