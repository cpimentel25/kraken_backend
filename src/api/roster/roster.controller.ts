import * as dotenv from 'dotenv';
import { AuthRequest } from '../../auth/auth.types';
import { Request, Response } from 'express';
import logger from '../../logger';
import { getAllRoster, getAllValuesRoster, getValueRoster, postCreateRoster } from './roster.services';

dotenv.config();

export async function handleGetAllRoster(req: AuthRequest, res: Response) {
  const id = req.user?._id;
  try {
    const roster = await getAllRoster(id);
    return res.status(200).json(roster);
  } catch (error) {
    logger.error('handleGetAllRoster ~ error', error)
    return res.status(500).json(error);
  }
};

export async function handleCreateRoster(req: Request, res: Response) {
  const data = req.body;
  try {
    const roster = await postCreateRoster(data);
    return res.status(200).json(roster);
  } catch (error: any) {
    logger.error('handleCreateRoster ~ error', error);
    return res.status(500).json(error.message);
  }
};

export async function handleGetAllValuesRoster(req: AuthRequest, res: Response) {
  const id = req.user?._id;
  try {
    const values = await getAllValuesRoster(id);
    return res.status(200).json(values);
  } catch (error) {
    logger.error('handleGetValueRoster ~ error', error)
    return res.status(500).json(error);
  }
};

export async function handleGetValueRoster(req: any, res: Response) {
  const userId = req.user?._id;
  const { id } = req.params;
  try {
    const roster = await getValueRoster(userId, id);
    return res.status(200).json(roster);
  } catch (error) {
    logger.error('handleGetValueRoster ~ error', error);
    return res.status(500).json(error);
  }
};
