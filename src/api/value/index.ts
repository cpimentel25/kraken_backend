import { Router } from "express";
import {
  handleAllGetData,
  handleCreateValue,
  handleDeleteValue,
  handleGetValue,
  handleUpdateValue
} from "./value.controllet";

const router = Router();

// Get /api/values
router.get('/', handleAllGetData);

// Get /api/values/:id
router.get('/:id', handleGetValue);

// Post /api/values
router.post('/', handleCreateValue);

// Patch /api/values/:id
router.patch('/:id', handleUpdateValue);

// Delete /api/values/:i/
router.delete('/:id', handleDeleteValue);

export default router;
