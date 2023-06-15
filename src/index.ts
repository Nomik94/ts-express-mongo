import 'dotenv/config';
import express, { Express } from 'express';
import router from './router';
import mongoose from 'mongoose';

const app: Express = express();
const mongo = mongoose;

const port = process.env.PORT;
const mongoUri: string = process.env.MONGO_URI as string;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router);

mongo
  .connect(mongoUri)
  .then(() => console.log('MongoDB Start'))
  .catch((e) => console.error(e));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
