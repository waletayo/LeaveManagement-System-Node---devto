const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose.Promise = require('bluebird');
const db = 'mongodb://localhost:27017/levemanagementdb';

mongoose.connect(db);
const User = require("../authentication/auth.model");

async function seedUser() {
    const hash = await bcrypt.hash('password123', 10);
    User.create({
        email: "tayot51@gmail.com",
        password: hash,
        fullname: "staff manager",
        role: 'manager',
    }).then(user => {
        console.log(`${user} user created`);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        mongoose.connection.close();

    })
}

seedUser();

