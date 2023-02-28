import * as dotenv from 'dotenv';
import { AuthRequest } from '../../auth/auth.types';
import { NextFunction, Request, Response } from 'express';
import logger from '../../logger/index';
import {
  deleteRoster,
  getAllRoster,
  getAllSharedRoster,
  getAllValuesRoster,
  getLastFiveRoster,
  getLastValueRoster,
  getRosterTotalValues,
  getValueRoster,
  postCreateRoster,
  updateRoster
} from './roster.services';

dotenv.config();

export async function handleGetAllRoster(req: AuthRequest, res: Response) {
  const id = req.user?._id;
  try {
    const sharedRoster = getAllSharedRoster(id);
    // console.log('Shared Roster: ', sharedRoster);

    const roster = await getAllRoster(id);
    // console.log('Roster owned: ', roster);

    return res.status(200).json(roster);
  } catch (error) {
    logger.error('handleGetAllRoster ~ error', error)
    return res.status(500).json(error);
  }
};

export async function handleUpdateRoster(req: AuthRequest, res: Response) {
  const { id } = req.params;
  const data = req.body;
  try {
    const rosterUpdate = await updateRoster(id, data);
    console.log('Update Roster: ', rosterUpdate)
    res.status(200).json(rosterUpdate);
  } catch (error: any) {
    logger.error('handleUpdateRoster ~ error', error)
    return res.status(500).json(error);
  }
}

export async function handleDeleteRoster(req: AuthRequest, res: Response) {
  const { id } = req.params;
  try {
    const rosterDelete = await deleteRoster(id);
    res.status(200).json(rosterDelete);
  } catch (error) {
    logger.error('handleDeleteRoster ~ error', error)
    return res.status(500).json(error);
  }
}

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
    logger.error('handleGetAllValuesRoster ~ error', error)
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

export async function getTotalValues(req: any, res: Response) {
  const userId = req.user?._id;
  const { id } = req.params;
  try {
    const sumValues = await getRosterTotalValues(userId, id);
    return res.status(200).json(sumValues);
  } catch (error) {
    logger.error('getTotalValues ~ error', error);
    return res.status(500).json(error);
  }
};

export async function getLastValue(req: any, res: Response) {
  const userId = req.user?._id;
  const { id } = req.params;
  try {
    const lastValue = await getLastValueRoster(userId, id);
    return res.status(200).json(lastValue);
  } catch (error) {
    logger.error('getLastValue ~ error', error);
    return res.status(500).json(error);
  }
};

export async function getLastFive(req: any, res: Response) {
  const userId = req.user?._id;
  const { id } = req.params;
  try {
    const lastValue = await getLastFiveRoster(userId, id);
    // @ts-ignore
    const { values } = lastValue
    return res.status(200).json(values);
  } catch (error) {
    logger.error('getLastFiveRoster ~ error', error);
    return res.status(500).json(error);
  }
};
