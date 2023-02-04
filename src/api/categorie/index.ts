import { Router } from "express";
import { handleAllGetCategorie,
  handleCreateCategorie,
  handleDeleteCategorie,
  handleGetCategorie,
  handleUpdateCategorie
} from "./categorie.controller";
import { isAuthenticated } from "../../auth/auth.service";

const router = Router();

// Get /api/categorie/ -> controller (handle__)
router.get('/', isAuthenticated, handleAllGetCategorie);

// Get /api/categorie/:id
router.get('/:id', isAuthenticated, handleGetCategorie);

// Post /api/categorie
router.post('/', isAuthenticated, handleCreateCategorie);

// Patch /api/categorie/:id
router.patch('/:id', isAuthenticated, handleUpdateCategorie);

// Delete /api/categorie/:id
router.delete('/:id', isAuthenticated, handleDeleteCategorie);

export default router;
