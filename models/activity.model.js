const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
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
    },
    post_time: {
        type: String,
        required: true,
        trim: true
    },
    age_from: {
        type: Number,
        required: true,
        trim: true
    },
    age_to: {
        type: Number,
        required: true,
        trim: true
    },
    activity_time:{
        type: String
    },
    activity_location:{
        type: String,
        required: true
    },
    activity_description: {
        type: String
    },
    players_needed: {
        type: Number,
        required: true
    },
    players_rsvped: {
        type: Number,
        required: true
    }

}, {
    timestamps: true,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;