const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
    activity_id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    user_id: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }
}, {
    timestamps: true,
});

const RSVP = mongoose.model('RSVP', rsvpSchema);

module.exports = RSVP;