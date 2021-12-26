const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
    activity_id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    tag: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
});

const Tag = mongoose.model('Activity_Tag', tagSchema);

module.exports = Tag;