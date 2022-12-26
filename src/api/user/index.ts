import { Router } from "express";
import { handleAllGetUsers,
  handleCreateUsers,
  handleDeleteUsers,
  handleGetUsers,
  handleUpdateUsers,
} from "./user.controller";
import { isAuthenticated } from "../../auth/auth.service";

const router = Router();

// Get /api/users/ -> controller (handle__)
router.get('/', isAuthenticated, handleAllGetUsers);

// Get /api/users/:id
router.get('/:id', isAuthenticated, handleGetUsers);

// Post /api/users
router.post('/', handleCreateUsers);

// Patch /api/users/:id
router.patch('/:id', isAuthenticated, handleUpdateUsers);

// Delete /api/users/:id
router.delete('/:id', isAuthenticated, handleDeleteUsers);

export default router;
