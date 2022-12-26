
import { NextFunction, Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById
} from "./user.services";
import * as dotenv from 'dotenv';

dotenv.config();

export async function handleAllGetUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users)
  } catch (error) {
    console.log('handleAllGetUsers ~ error', error)
    return res.status(500).json(error);
  }
};

export async function handleGetUsers(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user.profile);
  } catch (error) {
    console.log('handleGetUser ~ error', error);
    return res.status(500).json(error);
  }
};

export async function handleCreateUsers(req: Request, res: Response) {
  const data = req.body;
  try {
    const user = await createUser(data);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export async function handleUpdateUsers(req: Request, res: Response) { };

export async function handleDeleteUsers(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteUser(id);
    return res.status(200).json({ message: 'User delete' });
  } catch (error) {
    console.log('handleDeleteUsers ~ error', error);
    return res.status(500).json(error);
  }
};

