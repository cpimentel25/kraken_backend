import { Router } from "express";
import { isAuthenticated } from "../../auth/auth.service";
import {
  getLastValue,
  getTotalValues,
  handleCreateRoster,
  handleGetAllRoster,
  handleGetAllValuesRoster,
  handleGetValueRoster
} from "./roster.controller";

const router = Router();

// Get /api/roster/
router.get('/', isAuthenticated, handleGetAllRoster);

// Get /api/roster/values
router.get('/values', isAuthenticated, handleGetAllValuesRoster);

// Get /api/roster/values/:id
router.get('/values/:id', isAuthenticated, handleGetValueRoster);

// Get /api/roster/values/total/:id
router.get('/values/total/:id', isAuthenticated, getTotalValues)

// Get /api/roster/lastvalue/:id --> [last value of roster id]
router.get('/lastvalue/:id', isAuthenticated, getLastValue);

// Post /api/roster/
router.post('/',isAuthenticated, handleCreateRoster);

export default router;
