const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.pluralize(null);

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://firstMern:dbPassword@cluster0.qbwrs.mongodb.net/runoutDB?retryWrites=true&w=majority";
// 'mongodb://localhost:27017/runout_db';
// "mongodb+srv://firstMern:dbPassword@cluster0.qbwrs.mongodb.net/runoutDB?retryWrites=true&w=majority";
// process.env.MONGODB_ATLAS_URI || 
mongoose.connect(uri, {useNewUrlParser : true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully to runout_db.\n");
})

const usersRouter = require('./routes/user');
app.use('/users', usersRouter);

const activityRouter = require('./routes/activity');
app.use('/activity', activityRouter);

const eventRouter = require('./routes/event');
app.use('/event', eventRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});