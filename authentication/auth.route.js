'use strict';
const {Router} = require('express');
const UserController = require("./auth.controller");

const router = Router();
router.post("/create/account", UserController.CreateAccount);
router.post("/account/login", UserController.login);
router.get("/managers/list", UserController.listManagers);

module.exports = router;
