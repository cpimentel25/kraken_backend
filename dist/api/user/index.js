"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_service_1 = require("../../auth/auth.service");
const router = (0, express_1.Router)();
// Get /api/users/ -> controller (handle__)
router.get('/', auth_service_1.isAuthenticated, user_controller_1.handleAllGetUsers);
// Get /api/users/:id
router.get('/:id', auth_service_1.isAuthenticated, user_controller_1.handleGetUsers);
// Post /api/users
router.post('/', user_controller_1.handleCreateUsers);
// Patch /api/users/:id
router.patch('/:id', auth_service_1.isAuthenticated, user_controller_1.handleUpdateUsers);
// Delete /api/users/:id
router.delete('/:id', auth_service_1.isAuthenticated, user_controller_1.handleDeleteUsers);
exports.default = router;
