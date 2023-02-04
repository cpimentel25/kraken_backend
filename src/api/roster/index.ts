import { Router } from "express";
import {
  getLastFive,
  getLastValue,
  getTotalValues,
  handleCreateRoster,
  handleGetAllRoster,
  handleGetAllValuesRoster,
  handleGetValueRoster
} from "./roster.controller";
import { isAuthenticated } from "../../auth/auth.service";

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

// Get /api/roster/lastfive/:id --> [last 5 values of roster id]
router.get('/lastfive/:id', isAuthenticated, getLastFive);

// Post /api/roster/
router.post('/',isAuthenticated, handleCreateRoster);

export default router;
