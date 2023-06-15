import BoardRepository from './board.repository';
const boardRepository = new BoardRepository();
class BoardService {
  async createPost(data: IBoard) {
    return await boardRepository.save(data);
  }

  async getAllBoard() {
    return await boardRepository.getAllBoard();
  }
}

export default BoardService;
