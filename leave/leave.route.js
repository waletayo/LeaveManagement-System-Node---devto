'use strict';
const {ManagerChecker} = require("../util/RoleChecker");

const {Router} = require('express');
const LeaveController = require("./leave.controller");

const router = Router();
router.post("/request/leave", LeaveController.requestLeave);
router.patch("/update/leave/status", LeaveController.approveLeaveOrRejectLeave);

module.exports = router;
