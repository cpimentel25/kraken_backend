import { Request, Response } from "express";
import {
  createValue,
  deleteValue,
  findRoster,
  getAllValue,
  getValueById,
  updateRosterValue,
  updateValue
} from "./value.services";
import { AuthRequest } from "../../auth/auth.types";
import logger from "../../logger";

export async function handleAllGetData(req: AuthRequest, res: Response) {
  const id = req.user?._id;
  try {
    const value = await getAllValue(id);
    return res.status(200).json(value);
  } catch (error) {
    logger.error('handleAllGetData ~ error', error)
    return res.status(500).json(error);
  }
};

export async function handleGetValue(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const value = await getValueById(id);
    return res.status(200).json(value)
  } catch (error) {
    logger.error('handleGetValue ~ error', error);
    return res.status(500).json(error);
  }
};

export async function handleCreateValue(req: any, res: Response) {
  const data = req.body;
  const user = req.user;

  try {
    const rosterLive = findRoster(data, user);

    if (!rosterLive) {
      console.log('Roster not found');
      return res.status(404).json({ message: 'Roster not found' });
    }

    const value = await createValue(data);
    const rosterValue = await updateRosterValue(value, user);
    return res.status(200).json(rosterValue);

  } catch (error: any) {
    logger.error('handleCreateValue ~ error', error)
    return res.status(500).json(error.message);
  }
};

export async function handleUpdateValue(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  try {
    const value = await updateValue(id, data);
    if(!value) {
      return res.status(404).json({ message: 'Value no found' });
    }
    return res.status(200).json(value);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export async function handleDeleteValue(req: AuthRequest, res: Response) {
  const { id } = req.params;
  try {
    const value = await deleteValue(id);

    if (!value) {
      return res.status(404).json({ message: 'Value not found' });
    }
    return res.status(200).json({ message: 'Value delete '});

  } catch (error) {
    return res.status(500).json(error);
  }
};
