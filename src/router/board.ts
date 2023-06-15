import { Router } from 'express';
import BoardController from '../board/board.controller';

const boardRouter = Router();
const boardController = new BoardController();

boardRouter.get('/', boardController.getAllBoard);
boardRouter.post('/', boardController.createPost);

export default boardRouter;
