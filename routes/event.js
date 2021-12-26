const router = require('express').Router();
let Event = require('../models/event.model');
let Tag = require('../models/event_tag.model');

router.route('/').get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const event_id = req.body.event_id;
    const user_id = req.body.user_id;
    const event_time = req.body.event_time;
    const event_location = req.body.event_location;
    const event_description = req.body.event_description;

    const newEvent = new Event({ event_id, user_id, event_time, event_location, event_description });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;