"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/healthCheck
router.get('/', (req, res) => {
    res.json({ message: 'Your server is RUNNING!' });
});
exports.default = router;
