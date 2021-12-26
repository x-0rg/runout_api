const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    event_id: {
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
    },
    event_time: {
        type: String,
        required: true,
        trim: true
    },
    event_location: {
        type: String,
        required: true
    },
    event_description: {
        type: String
    }

}, {
    timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;