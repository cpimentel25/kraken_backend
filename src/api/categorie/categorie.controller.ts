
import { NextFunction, Request, Response } from "express";
import { createCategorie, deleteCategorie, getAllCategorie, getCategorieById, updateCategorie } from "./categorie.services";
import * as dotenv from 'dotenv';
import logger from "../../logger";

dotenv.config();

export async function handleAllGetCategorie(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await getAllCategorie();
    return res.status(200).json(users)
  } catch (error) {
    logger.error('handleAllGetUsers ~ error', error)
    return res.status(500).json(error);
  }
};

export async function handleGetCategorie(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const categorie = await getCategorieById(id);
    if (!categorie) {
      return res.status(404).json({ message: 'Categorie not found' });
    }
    return res.status(200).json(categorie);
  } catch (error) {
    logger.error('handleGetCategorie ~ error', error);
    return res.status(500).json(error);
  }
};

export async function handleCreateCategorie(req: Request, res: Response) {
  const data = req.body;
  try {
    const user = await createCategorie(data);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export async function handleUpdateCategorie(req: Request, res: Response) {
  const { id, categorie } = req.body;
  try {
    await updateCategorie(id, categorie);
    return res.status(200).json({ message: 'Categorie update' });
  } catch (error) {
    logger.error('handleUpdateCategorie ~ error', error);
    return res.status(500).json(error);
  }
};

export async function handleDeleteCategorie(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteCategorie(id);
    return res.status(200).json({ message: 'User delete' });
  } catch (error) {
    logger.error('handleDeleteUsers ~ error', error);
    return res.status(500).json(error);
  }
};

