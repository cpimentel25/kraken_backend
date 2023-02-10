import { Router } from "express";
import { isAuthenticated, hasRole } from "../../auth/auth.service";
import {
  handleAllGetValues,
  handleCreateValue,
  handleDeleteValue,
  handleGetValue,
  handleUpdateValue
} from "./value.controllet";

const router = Router();

// Get /api/values
router.get('/', isAuthenticated, handleAllGetValues); // -> Dont user more! (Require Fix)

// Get /api/values/:id
router.get('/:id', isAuthenticated, handleGetValue); // -> Dont user more! (Require Fix)

// Post /api/values
router.post('/', isAuthenticated, handleCreateValue);

// Patch /api/values/:id
router.patch('/:id', isAuthenticated, hasRole(['ADMIN']), handleUpdateValue);

// Delete /api/values/:i/
router.delete('/:id', isAuthenticated, handleDeleteValue);

export default router;
