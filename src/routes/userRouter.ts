import express from 'express'
import { validateUserId, validateUserInput } from '../middleware/user';
import { handleInputErrors } from '../middleware/validation';
import { UserController } from '../controller/userController';
import { limiter } from '../config/limiter';

const router = express.Router();


router.post('/', limiter, validateUserInput, handleInputErrors, UserController.create);

router.get('/', UserController.getAllNames);

router.put('/:id', limiter, validateUserId, handleInputErrors, UserController.updateById);

router.delete('/:id', limiter, validateUserId, UserController.deleteById);
export default router;