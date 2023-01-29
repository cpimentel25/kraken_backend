import { Router } from "express";
import { isAuthenticated } from "../../auth/auth.service";
import { handleCreateRoster, handleGetAllRoster } from "./roster.controller";

const router = Router();

// Get /api/roster/
router.get('/', isAuthenticated, handleGetAllRoster);

// Get /api/roster/:id
router.get('/:id', isAuthenticated, );

// Post /api/roster/
router.post('/',isAuthenticated, handleCreateRoster);

export default router;
