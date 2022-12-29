import { Request, Response } from "express";
import {
  createValue,
  deleteValue,
  getAllValue,
  getValueById,
  updateValue
} from "./value.services";
import { AuthRequest } from "../../auth/auth.types";
import logger from "../../logger";

// import mongoose, { isValidObjectId } from "mongoose";
// mongoose.set('strictQuery', false); // -> Error ?

export async function handleAllGetData(req: Request, res: Response) {
  // const id = '63a32a8a3bb0260110a03f64';
  const { id } = req.params;

  // const userId = req.headers?.createdBy as string; // -> undifined {Dont work}
  // const createdBy = new mongoose.Types.ObjectId(userId); // -> ObjectId

  // console.log(userId) // -> undefined {Dont work}
  // console.log(createdBy); // -> new ObjectId("63ad1c0b4dc8a21382b50d0d")
  // console.log(typeof(createdBy)); // -> Object
  // console.log(isValidObjectId(createdBy)); // -> true

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
    return res.status(500).json(error);
  }
};

export async function handleCreateValue(req: Request, res: Response) {
  const data = req.body;
  try {
    const value = await createValue(data);
    return res.status(200).json(value);
  } catch (error: any) {
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
