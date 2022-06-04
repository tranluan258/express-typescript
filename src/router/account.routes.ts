import express, { Router } from 'express';
import accountController from '../controller/account.controller';

const router: Router = express.Router();

router.post('/sign-up', accountController.signUp);
router.post('/sign-in', accountController.signIn);

export default router;
