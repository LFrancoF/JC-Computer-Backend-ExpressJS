import { Router } from 'express';
import {login,register,getUsuarios} from '../controllers/authController.js';

const router = Router();

router.get('/login', login);
router.get('/usuarios', getUsuarios);
router.post('/register', register);

export default router;