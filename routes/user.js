const router = require('express').Router();
let User = require('../models/user.model');
let RSVP = require('../models/rsvp.model');

router.route('/all').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
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

router.route('/login').post( async (req,res) => {
    const user = await User.findOne({user_id : req.body.user_id});
    if(user == null){
        return res.status(400).send({message : "User not found"});
    }
    else {
        if(user.validPassword(req.body.password)){
            return res.status(201).send({
                message: "User Logged In"
            });
        } 
        else {
            return res.status(400).send({
                message: "wrong password"
            });
        }
    }
})

module.exports = router;