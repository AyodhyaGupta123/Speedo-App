const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: [3,'first name must be at least 3 characters long']
    },
    lastname: {
        type: String,
        minlength: [3,'last name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,
        default: null
    },
    date: {
        type: Date,
        default: Date.now
    }
});


userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET,{
        expiresIn: '24 hours'
    });
    return token;
}

userSchema.methods.comparePassword = async function(password) {
   return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema); 

module.exports = userModel;
