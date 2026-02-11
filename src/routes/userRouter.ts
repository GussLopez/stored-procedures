import express from 'express'
import { validateUserId, validateUserInput } from '../middleware/user';
import { handleInputErrors } from '../middleware/validation';
import { UserController } from '../controller/userController';
import { limiter } from '../config/limiter';

const router = express.Router();

router.use(limiter);

router.post('/', validateUserInput, handleInputErrors, UserController.create);

router.get('/', UserController.getAllNames);

router.put('/:id', validateUserId, handleInputErrors, UserController.updateById);

router.delete('/:id', validateUserId, UserController.deleteById);
export default router;