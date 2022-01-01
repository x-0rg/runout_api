const mongoose = require('mongoose');
var crypto = require('crypto');

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
    },
    salt: String
}, {
    timestamps: true,
});

userSchema.methods.setPassword = function(password){
    //creating a unique salt for a particular user
    this.salt = crypto.randomBytes(16).toString('hex');

    //hashing user's salt and password with 1000 iterations, 64 length and sha512 digest
    this.password_hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.password_hash == hash;
}

const User = mongoose.model('User', userSchema);

module.exports = User;