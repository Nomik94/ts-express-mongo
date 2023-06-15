import { Router } from 'express';
import boardRouter from './board';

const router = Router();

router.use('/board', boardRouter);

export default router;
