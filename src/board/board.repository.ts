import Board from '../schemas/board.model';

class BoardRepository {
  async save(data: IBoard) {
    return await Board.create(data);
  }

  async getAllBoard() {
    return await Board.find().exec();
  }
}

export default BoardRepository;
