const router = require('express').Router();
let User = require('../models/user.model');
let RSVP = require('../models/rsvp.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const user_id = req.body.user_id;
    const name = req.body.name;
    const age = req.body.age;
    const email_id = req.body.email;
    const pincode = req.body.pincode;
    const state = req.body.state;
    const country = req.body.country;
    const push_score = 0;
    const password_hash = req.body.password;

    const newUser = new User({ user_id, name, age, email_id, pincode, state, country, push_score, password_hash });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;