const router = require('express').Router();
let Activity = require('../models/activity.model');
let Tag = require('../models/activity_tag.model');

router.route('/').get((req, res) => {
    Activity.find()
        .then(activities => res.json(activities))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const activity_id = req.body.activity_id;
    const user_id = req.body.user_id;
    const post_time = req.body.post_time;
    const age_from = req.body.age_from;
    const age_to = req.body.age_to;
    const activity_time = req.body.activity_time;
    const activity_location = req.body.activity_location;
    const activity_description = req.body.activity_description;
    const players_needed = req.body.players_needed;
    const players_rsvped = 0;

    const newActivity = new Activity({ activity_id, user_id, post_time, age_from, age_to, activity_time, activity_location, activity_description, players_needed, players_rsvped });

    newActivity.save()
        .then(() => res.json('Activity added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;