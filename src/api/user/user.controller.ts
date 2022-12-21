import { createUser, deleteUser, getAllUsers, getUserById } from "./user.services";

export async function handleAllGetUsers(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users)
  } catch (error) {
    console.log('handleAllGetUsers ~ error', error)
    return res.status(500).json(error);
  }
};

export async function handleGetUsers(req, res) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);

  } catch (error) {
    console.log('handleGetUser ~ error', error);
    return res.status(500).json(error);
  }
};

export async function handleCreateUsers(req, res) {
  const data = req.body;
  try {
    const user = await createUser(data);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export async function handleUpdateUsers(req, res) { };

export async function handleDeleteUsers(req, res) {
  const { id } = req.params;
  try {
    await deleteUser(id);
    return res.status(200).json({ message: 'User delete' });
  } catch (error) {
    console.log('handleDeleteUsers ~ error', error);
    return res.status(500).json(error);
  }
};
