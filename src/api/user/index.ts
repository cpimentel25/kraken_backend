import { Router } from "express";
import { handleAllGetUsers,
  handleCreateUsers,
  handleDeleteUsers,
  handleGetUsers,
  handleGuestsUsers,
  handleUpdateUsers,
} from "./user.controller.js";
import { isAuthenticated } from "../../auth/auth.service.js";

const router = Router();

// Post /api/users
router.post('/', handleCreateUsers);

// Get /api/users/ -> controller (handle__)
router.get('/', isAuthenticated, handleAllGetUsers);

// Patch /api/users/guests/:id
router.patch('/guests/:id', isAuthenticated, handleGuestsUsers);

// Get /api/users/:id
router.get('/:id', isAuthenticated, handleGetUsers);

// Patch /api/users/:id
router.patch('/:id', isAuthenticated, handleUpdateUsers);

// Delete /api/users/:id
router.delete('/:id', isAuthenticated, handleDeleteUsers);

export default router;
