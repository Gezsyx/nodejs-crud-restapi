import express from 'express';
import { getUsers, saveUser, showUserById, updateUserById, deleteUserById } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', saveUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
router.get('/:id', showUserById);

export default router;