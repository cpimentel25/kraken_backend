import { Router } from "express";
import { handleLoginUser } from "./local.controller.js";

const router = Router();

// POST /auth/login
router.post('/login', handleLoginUser);

// POST /auth/change-password
// router.post('/change-password'. handleChangePassword);

// // POST /auth/forgot-password
// router.post('/forgot-password', handleChangePassword);

// //POST /auth/verify-email
// router.post('/verify-email', handleVerifyEmail);

export default router;
