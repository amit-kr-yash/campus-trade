import express from 'express'
import {addUser, getAllUser, getUserById, searchUser} from '../controllers/user.controller.js'
const router = express.Router()

router.post('/',addUser);
router.get('/',getAllUser);
router.get('/:id',getUserById);
router.get('/search/:query',searchUser);

export default router;