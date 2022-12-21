import { createValue, getAllValue } from "./value.services";


export async function handleAllGetData(req, res) {
  try {
    const value = await getAllValue();
    return res.status(200).json(value);
  } catch (error) {
    console.log('handleAllGetData ~ error', error)
    return res.status(500).json(error);
  }
};

export async function handleGetValue(req, res) {};

export async function handleCreateValue(req, res) {
  const data = req.body;
  try {
    const value = await createValue(data);
    return res.status(200).json(value);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export async function handleUpdateValue(req, res) {};

export async function handleDeleteValue(req, res) {};
