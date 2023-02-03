import { Router } from "express";
import { isAuthenticated, hasRole } from "../../auth/auth.service.js";
import {
  handleAllGetData,
  handleCreateValue,
  handleDeleteValue,
  handleGetValue,
  handleUpdateValue
} from "./value.controllet.js";

const router = Router();

// Get /api/values
router.get('/', isAuthenticated, handleAllGetData); // -> Dont user more! (Require Fix)

// Get /api/values/:id
router.get('/:id', isAuthenticated, handleGetValue); // -> Dont user more! (Require Fix)

// Post /api/values
router.post('/', isAuthenticated, handleCreateValue);

// Patch /api/values/:id
router.patch('/:id', isAuthenticated, hasRole(['ADMIN']), handleUpdateValue);

// Delete /api/values/:i/
router.delete('/:id', isAuthenticated, handleDeleteValue);

export default router;
