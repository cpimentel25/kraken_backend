import { Router } from "express";
import { handleAllGetUsers,
  handleCreateUsers,
  handleDeleteUsers,
  handleGetUsers,
  handleUpdateUsers
} from "./user.controller";

const router = Router();

// Get /api/users/
router.get('/', handleAllGetUsers);

// Get /api/users/:id
router.get('/:id', handleGetUsers);

// Post /api/users
router.post('/', handleCreateUsers);

// Patch /api/users/:id
router.patch('/:id', handleUpdateUsers);

// Delete /api/users/:id
router.delete('/:id', handleDeleteUsers);

export default router;
