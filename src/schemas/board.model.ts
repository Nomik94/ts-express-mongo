import { Model, Schema, model } from 'mongoose';

const boardSchema = new Schema<IBoard>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Board = model<IBoard>('Board', boardSchema);

export default Board;
