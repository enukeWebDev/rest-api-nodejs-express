import express from 'express';
import { getUsers, createUsers, getID, deleteById, editById } from '../controllers/users.js';

//Initialize Router
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUsers);
router.get('/:id', getID);
router.delete('/:id', deleteById);
router.patch('/:id', editById);


export default router;