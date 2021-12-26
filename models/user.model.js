const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    email_id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    pincode: {
        type: Number,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    push_score: {
        type: Number,
        required: true
    },
    password_hash: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;