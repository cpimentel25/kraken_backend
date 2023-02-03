import * as dotenv from 'dotenv';
import { AuthRequest } from '../../auth/auth.types.js';
import { NextFunction, Request, Response } from 'express';
import logger from '../../logger/index.js';
import {
  getAllRoster,
  getAllSharedRoster,
  getAllValuesRoster,
  getLastFiveRoster,
  getLastValueRoster,
  getRosterTotalValues,
  getValueRoster,
  postCreateRoster
} from './roster.services.js';

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

// export async function handleGetAllSharedRoster(req: AuthRequest, res: Response, next: NextFunction) {
//   const id = req.user?._id;

//   try {
//     const rosters = await getAllSharedRoster(id);
//     console.log('shared Roster: ', rosters)
//     res.status(200).json(rosters);
//   } catch (error) {
//     logger.error('handleGetAllSharedRoster ~ error', error)
//     return res.status(500).json(error);
//   }

//   next()
//   return true;
// }

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
