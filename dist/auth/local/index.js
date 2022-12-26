"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const local_controller_1 = require("./local.controller");
const router = (0, express_1.Router)();
// POST /auth/login
router.post('/login', local_controller_1.handleLoginUser);
// POST /auth/change-password
// router.post('/change-password'. handleChangePassword);
// // POST /auth/forgot-password
// router.post('/forgot-password', handleChangePassword);
// //POST /auth/verify-email
// router.post('/verify-email', handleVerifyEmail);
exports.default = router;
