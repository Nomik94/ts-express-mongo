import { Router } from 'express';
import boardRouter from './board';
import userRouter from './user';

const router = Router();

router.use('/board', boardRouter);
router.use('/user', userRouter);

export = router;
