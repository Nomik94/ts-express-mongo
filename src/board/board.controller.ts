import { Request, Response } from 'express';
import BoardService from './board.service';
const boardService = new BoardService();
class BoardController {
  async getAllBoard(req: Request, res: Response) {
    try {
      const board = await boardService.getAllBoard();
      res.json(board);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async createPost(req: Request, res: Response) {
    try {
      const data = req.body;
      const post = await boardService.createPost(data);
      res.status(201).json(post);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default BoardController;
