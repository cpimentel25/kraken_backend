"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_service_1 = require("../../auth/auth.service");
const value_controllet_1 = require("./value.controllet");
const router = (0, express_1.Router)();
// Get /api/values
router.get('/', auth_service_1.isAuthenticated, value_controllet_1.handleAllGetData);
// Get /api/values/:id
router.get('/:id', auth_service_1.isAuthenticated, value_controllet_1.handleGetValue);
// Post /api/values
router.post('/', auth_service_1.isAuthenticated, value_controllet_1.handleCreateValue);
// Patch /api/values/:id
router.patch('/:id', auth_service_1.isAuthenticated, (0, auth_service_1.hasRole)(['ADMIN']), value_controllet_1.handleUpdateValue);
// Delete /api/values/:i/
router.delete('/:id', auth_service_1.isAuthenticated, (0, auth_service_1.hasRole)(['ADMIN']), value_controllet_1.handleDeleteValue);
exports.default = router;
