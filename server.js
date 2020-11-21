const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const vm = require("v-response");
const morgan = require('morgan');
const mongoose = require("mongoose")
const REGISTER = require("./authentication/auth.route");
const LEAVE = require("./leave/leave.route");
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', REGISTER);
app.use('/api', LEAVE);

const database = 'mongodb://localhost:27017/levemanagementdb';

mongoose.connect((database), {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(async () => {
        vm.log("connected to database", database);
    })
    .catch(err => vm.log("error mongodb", err));


app.listen(port, () => vm.log("server running on port:", port));

